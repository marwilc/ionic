/* eslint-disable @typescript-eslint/prefer-for-of */
import {
    AfterViewInit,
    Component,
    Input,
    OnInit,
    ViewChild,
} from '@angular/core';
// eslint-disable-next-line no-var
declare var mapboxgl: any;

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {
    @Input() coords: string;
    @ViewChild('map') map;
    constructor() {}

    ngOnInit() {
        console.log(this.coords);
    }

    ngAfterViewInit(): void {
        if (this.coords) {
            const latLng = this.coords.split(',');
            const lat = Number(latLng[0]);
            const lng = Number(latLng[1]);

            mapboxgl.accessToken =
                'pk.eyJ1IjoibWFyd2lsYyIsImEiOiJja29oc2RoYnAxMmZ2Mm9samdheGJwNzZjIn0.looQkWcMw8RVvuTlCJc4ug';
            const map = new mapboxgl.Map({
                style: 'mapbox://styles/mapbox/light-v10',
                center: [lng, lat],
                zoom: 15.5,
                container: this.map.nativeElement,
            });

            const marker = new mapboxgl.Marker()
                .setLngLat([lng, lat])
                .addTo(map);
        }
    }
}
