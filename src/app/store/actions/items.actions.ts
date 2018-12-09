import {Action} from '@ngrx/store';
import {Item} from '../../models/item';
import {ItemsState} from '../reducers/items.reducer';

export enum ItemsActionTypes {
  UPDATE_ALL_ITEMS = '[Item] Update all items',
  ADD_ITEM = '[Item] Add item',
  SELECT_ITEM = '[Item] Select item',
  REMOVE_ITEM = '[Item] Remove item',
  SEND_COMMENT = '[Item] Send Comment'
}

export class UpdateAllItems implements Action {
  readonly type = ItemsActionTypes.UPDATE_ALL_ITEMS;
  constructor(public payload: ItemsState) {}
}

export class SelectItem implements Action {
  readonly type = ItemsActionTypes.SELECT_ITEM;
  constructor(public payload: number) {}
}

export class AddItem implements Action {
  readonly type = ItemsActionTypes.ADD_ITEM;
  constructor(public payload: Item) {}
}

export class RemoveItem implements Action {
  readonly type = ItemsActionTypes.REMOVE_ITEM;
  constructor(public payload: number) {}
}

export class SendComment implements Action {
  readonly type = ItemsActionTypes.SEND_COMMENT;
  constructor(public payload: string) {}
}

export type ActionItems = UpdateAllItems | SelectItem | SendComment | AddItem | RemoveItem;
