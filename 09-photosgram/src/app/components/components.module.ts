import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { MapComponent } from './map/map.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
    declarations: [PostsComponent, PostComponent, MapComponent],
    imports: [CommonModule, IonicModule, PipesModule],
    exports: [PostsComponent, PostComponent, MapComponent],
})
export class ComponentsModule {}
