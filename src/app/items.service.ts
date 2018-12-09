import {Injectable} from '@angular/core';
import {AddItem, RemoveItem, SelectItem, SendComment, UpdateAllItems} from './store/actions/items.actions';
import {Store} from '@ngrx/store';
import {AppState} from './store/app-store.module';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private store: Store<AppState>) {
  }

  uploadItems() {
    const items = localStorage.getItem('items');
    if (items) {
      this.store.dispatch(new UpdateAllItems(JSON.parse(items)));
    } else {
      this.store.select('items').subscribe((dataItems) => {
        localStorage.setItem('items', JSON.stringify(dataItems));
      });
    }
  }

  selectItem(index: number) {
    this.store.dispatch(new SelectItem(index));
    this.updateLocalStorage();
  }

  addItem(text: string) {
    this.store.dispatch(new AddItem({
      title: text,
      comments: []
    }));
    this.updateLocalStorage();
  }

  removeItem(index: number) {
    this.store.dispatch(new RemoveItem(index));
    this.updateLocalStorage();
  }

  sendComment(text: string) {
    this.store.dispatch(new SendComment(text));
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    this.store.select('items').subscribe((data) => {
      localStorage.setItem('items', JSON.stringify(data));
    });
  }
}
