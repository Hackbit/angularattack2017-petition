import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'petition-background',
  templateUrl: `petitionbackground.html`,
  providers: [PostsService]
})

export class PetitionBackgroundComponent { 
    posts: Post[];
    
    constructor(private postsService: PostsService) {
        this.postsService.getComments().subscribe(posts => {
            this.posts = posts;
        });
    }
}

interface geo {
    lt: number;
    lng: number;
}

interface address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: geo;
}

interface Post {
    id: number;
    name: string;
    username: string;
    email: string;
    address: address;
    phone: string;
    website: string;
}
interface Post {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;    
}