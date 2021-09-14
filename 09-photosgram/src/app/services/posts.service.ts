import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PostResponse } from '../models/post.model';

@Injectable({
    providedIn: 'root',
})
export class PostsService {
    pagePost = 0;

    constructor(private http: HttpClient) {}

    getPosts(pull: boolean = false) {
        if (pull) {
            this.pagePost = 0;
        }

        this.pagePost++;

        return this.http.get<PostResponse>(
            `${environment.url}/posts/?page=${this.pagePost}`
        );
    }
}
