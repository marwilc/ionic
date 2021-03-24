import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from 'src/app/interfaces/interfaces';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-slide-show-par',
  templateUrl: './slide-show-par.component.html',
  styleUrls: ['./slide-show-par.component.scss'],
})
export class SlideShowParComponent implements OnInit {
  @Input() movies: Movie[] = [];
  @Output() loadMoreMovies = new EventEmitter();

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10,
  };

  constructor(private _modal: ModalController) {}

  ngOnInit() {}

  loadMore() {
    this.loadMoreMovies.emit();
  }

  async showDetail(id: string) {
    const movieDetailModal = await this._modal.create({
      component: DetailComponent,
      componentProps: {
        id,
      },
    });

    await movieDetailModal.present();
  }
}
