import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core'
import { ISideList } from '../../models/side-menu-list/side-list'
import { NgClass } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'side-list',
  templateUrl: 'side-list.component.html'
})

export class SideListComponent implements OnInit {

  sideListIsPinned: boolean;
  selectedValue: string = '';
  sideListForm: FormGroup;
  displayItemList: ISideList[];

  @Input() listHeading: string;
  @Input() itemList: ISideList[];
  @Output() pinSideList = new EventEmitter<any>();
  @Output() result = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.sideListForm = this.fb.group({
      Search: ['']
    });

    this.displayItemList = this.itemList;
    this.sideListIsPinned = localStorage.getItem('sideListIsPinned') === 'true';
    // this.pinSideList.emit(this.sideListIsPinned);

  }

  routeTo(key: any) {
    this.selectedValue = key;
    this.result.emit(key);
  }

  doPinSideList() {
    this.sideListIsPinned = !this.sideListIsPinned;
    localStorage.setItem('sideListIsPinned', this.sideListIsPinned ? 'true' : 'false');
    this.pinSideList.emit(this.sideListIsPinned);
  }

  filterList(value: string) {
    this.displayItemList = this.itemList.filter(
      item => item.name.toUpperCase().includes(value.toUpperCase()));
  }
}
