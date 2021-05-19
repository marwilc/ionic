/* eslint-disable no-underscore-dangle */
import { EventEmitter, Injectable } from '@angular/core';
import {
  OneSignal,
  OSNotification,
  OSNotificationPayload,
} from '@ionic-native/onesignal/ngx';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class PushService {
  messages: OSNotificationPayload[] = [];
  pushListener = new EventEmitter<OSNotificationPayload>();
  userId: string;

  constructor(private oneSignal: OneSignal, private _storage: StorageService) {
    this.loadMessages();
  }

  async getMessages() {
    await this.loadMessages();
    return [...this.messages];
  }

  initSetup() {
    this.oneSignal.startInit(
      environment.onSignalId,
      environment.googleProjectNumber
    );

    this.oneSignal.inFocusDisplaying(
      this.oneSignal.OSInFocusDisplayOption.Notification
    );

    this.oneSignal.handleNotificationReceived().subscribe(async (push) => {
      // do something when notification is received
      console.log('Push received', push);
      await this.pushReceived(push);
    });

    this.oneSignal.handleNotificationOpened().subscribe(async (push) => {
      // do something when a notification is opened
      console.log('Tap push', push);
      await this.pushReceived(push.notification);
    });

    //get id of subscriber
    this.oneSignal.getIds().then((info) => {
      this.userId = info.userId;
    });

    this.oneSignal.endInit();
  }

  async pushReceived(push: OSNotification) {
    await this.loadMessages();
    const payload = push.payload;

    const existPush = this.messages.find(
      (message) => message.notificationID === payload.notificationID
    );

    if (existPush) {
      return;
    }

    this.messages.unshift(payload);
    this.pushListener.emit(payload);
    await this.saveMessages();
  }

  /**
   * save messages
   *
   * @memberof PushService
   */
  async saveMessages() {
    await this._storage.set('messages', this.messages);
  }

  /**
   * load messages
   *
   * @memberof PushService
   */
  async loadMessages() {
    this.messages = (await this._storage.get('messages')) || [];

    return this.messages;
  }

  async deleteMessages() {
    await this._storage.clear();
    this.messages = [];
    await this.saveMessages();
  }
}
