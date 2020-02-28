import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {
  itemform;
  numberOfItems = 0;
  list: any[] = [];
  public event: EventEmitter<any> = new EventEmitter();
  constructor(private formBuilder: FormBuilder, public bsModalRef: BsModalRef) {
   
  }

  ngOnInit() {
    this.itemform = this.formBuilder.group({
      name: ""
    })
    console.log(this.list)
  }

  saveToList(form) {
    if(form.value){
      this.triggerEvent(form.value.name);
      this.bsModalRef.hide();
    }
    
  }

  triggerEvent(item: string) {
    this.event.emit({ data: item , res:200  });
  }
}
