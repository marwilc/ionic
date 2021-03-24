import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy {
  @Input() id: string;

  private _subscription = new Subscription();

  constructor(private _movies: MoviesService) {}

  ngOnDestroy(): void {
    this._subscription.add(this._subscription.unsubscribe());
  }

  ngOnInit() {
    this._subscription.add(
      this._movies.getMovieDetail(this.id).subscribe((data) => {
        console.log(data);
      })
    );

    this._subscription.add(
      this._movies.getActors(this.id).subscribe((data) => {
        console.log(data);
      })
    );
  }
}
