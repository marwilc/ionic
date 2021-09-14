import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
    posts: Post[] = [];

    enabled = true;

    private sub = new Subscription();

    constructor(private post: PostsService) {}

    ngOnInit() {
        this.loadData();
    }

    doRefresh(event) {
        this.loadData(event, true);
    }

    loadData(event?, pull: boolean = false) {
        if (pull) {
            this.enabled = true;
            this.posts = [];
        }

        this.sub.add(
            this.post.getPosts(pull).subscribe((res) => {
                console.log(res);
                this.posts.push(...res.posts);

                if (event) {
                    event.target.complete();

                    if (res.posts.length === 0) {
                        this.enabled = false;
                    }
                }
            })
        );
    }
}
