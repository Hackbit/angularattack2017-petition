import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {
    message: string;

    constructor(private http: Http) {
        this.message = 'PostService Initialized: ';
    }

    getUsers() {
        this.message += 'users';
        console.log(this.message);
        return this.http.get('https://jsonplaceholder.typicode.com/users')
            .map(res => res.json())
    }

    getComments() {
        this.message += 'comments';
        console.log(this.message);
        return this.http.get('https://jsonplaceholder.typicode.com/comments')
            .map(res => res.json())
    }
}