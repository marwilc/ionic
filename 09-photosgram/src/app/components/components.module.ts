import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
    declarations: [PostsComponent, PostComponent],
    imports: [CommonModule, IonicModule],
    exports: [PostsComponent, PostComponent],
})
export class ComponentsModule {}
