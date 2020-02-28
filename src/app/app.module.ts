import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule, BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ItemListComponent } from './item-list/item-list.component';
import { RouterModule } from '@angular/router';
import { ItemAddComponent } from './item-add/item-add.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    RouterModule.forRoot([
      {path:'item', component:ItemListComponent },
      {path:'additem', component:ItemAddComponent }
    ])
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent],
  entryComponents: [ItemAddComponent],
})
export class AppModule { }
