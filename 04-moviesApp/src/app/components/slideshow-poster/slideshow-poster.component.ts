import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from 'src/app/interfaces/interfaces';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {
  @Input() movies: Movie[] = [];

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
  };

  constructor(private _modal: ModalController) {}

  ngOnInit() {}

  async showDetail(id: number) {
    const movieDetailModal = await this._modal.create({
      component: DetailComponent,
      componentProps: {
        id,
      },
    });

    await movieDetailModal.present();
  }
}
