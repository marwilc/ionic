import { ApplicationRef, Component, OnInit } from '@angular/core';
import { OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { PushService } from '../services/push.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  messages: OSNotificationPayload[] = [];

  constructor(
    public push: PushService,
    private applicationRef: ApplicationRef
  ) {}

  ngOnInit(): void {
    this.push.pushListener.subscribe((push) => {
      this.messages.unshift(push);
      this.applicationRef.tick();
    });
  }

  async ionViewWillEnter() {
    this.messages = await this.push.getMessages();
  }

  async deleteMessages() {
    await this.push.deleteMessages();
    this.messages = [];
  }
}
