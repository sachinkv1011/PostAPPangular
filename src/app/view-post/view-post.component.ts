import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent {
constructor(private api:ApiService){
  api.postFunction().subscribe(
    (posting)=>
    {
      this.posts=posting;
    }
  )
}

  posts:any=[ ]

}
