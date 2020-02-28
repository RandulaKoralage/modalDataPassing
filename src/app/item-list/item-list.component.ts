import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from  'ngx-bootstrap/modal/';
import { ItemAddComponent } from '../item-add/item-add.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  itemList = ["Book","Pen"];
  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModalWithComponent() {
    const initialState = {
      list: [
        {"tag":'Count',"value":this.itemList.length}
      ]
    };
    this.bsModalRef = this.modalService.show(ItemAddComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';  
    this.bsModalRef.content.event.subscribe(res => {
      this.itemList.push(res.data);
   });
  }
}
