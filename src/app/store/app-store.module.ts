import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActionReducerMap, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {itemReducer, ItemsState} from './reducers/items.reducer';

export interface AppState {
  items: ItemsState;
}

export const reducers: ActionReducerMap<AppState> = {
  items: itemReducer
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers)
  ]
})
export class AppStoreModule {
}
