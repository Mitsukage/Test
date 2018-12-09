import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../store/app-store.module';
import {ItemsService} from '../items.service';
import {Observable} from 'rxjs';
import {ItemsState} from '../store/reducers/items.reducer';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass']
})
export class CommentsComponent implements OnInit {

  items: Observable<ItemsState>;
  textComment = ``;

  constructor(private store: Store<AppState>, private serv: ItemsService) {
  }

  ngOnInit() {
    this.items = this.store.select('items');
  }

  sendComment() {
    this.serv.sendComment(this.textComment);
    this.textComment = ``;
  }

}
