import {Component, OnInit} from '@angular/core';
import {AppState} from '../store/app-store.module';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ItemsState} from '../store/reducers/items.reducer';
import {ItemsService} from '../items.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.sass']
})
export class ItemsComponent implements OnInit {

  textONewItem = '';
  items: Observable<ItemsState>;

  constructor(private store: Store<AppState>, private serv: ItemsService) {
  }

  ngOnInit() {
    this.serv.uploadItems();
    this.items = this.store.select('items');
  }

  addNewItem() {
    if (!this.textONewItem) {
      return alert('Empty field!');
    }
    this.serv.addItem(this.textONewItem);
    this.textONewItem = '';
  }

  selectItem(index: number) {
    this.serv.selectItem(index);
  }

  removeItem(index: number) {
    this.serv.removeItem(index);
  }
}
