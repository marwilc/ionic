import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PushService {
  constructor(private oneSignal: OneSignal) {}

  initSetup() {
    this.oneSignal.startInit(
      environment.onSignalId,
      environment.googleProjectNumber
    );

    this.oneSignal.inFocusDisplaying(
      this.oneSignal.OSInFocusDisplayOption.InAppAlert
    );

    this.oneSignal.handleNotificationReceived().subscribe((push) => {
      // do something when notification is received
      console.log('Push received', push);
    });

    this.oneSignal.handleNotificationOpened().subscribe((push) => {
      // do something when a notification is opened
      console.log('Tap push', push);
    });

    this.oneSignal.endInit();
  }
}
