import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainBarComponent } from './main-bar/main-bar.component';
import { ItemsComponent } from './items/items.component';
import { CommentsComponent } from './comments/comments.component';
import {AppStoreModule} from './store/app-store.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    MainBarComponent,
    ItemsComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppStoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
