import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { PushService } from './services/push.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private push: PushService, private platform: Platform) {}
  ngOnInit(): void {
    this.platform.ready().then(() => {
      this.push.initSetup();
    });
  }
}
