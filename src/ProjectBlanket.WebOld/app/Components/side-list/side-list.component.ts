import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core'
import { ISideList } from '../../Model/SideMenuList/side-list'
import { NgClass } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { Sidelist } from '../../Model/SideMenuList/side-list';
 

@Component({
    selector: 'side-list',
    templateUrl: 'app/components/side-list/side-list.component.html'
})

export class SideListComponent implements OnInit {

    sideListIsPinned: boolean = false;
    sideListForm: FormGroup;
    displayItemList: ISideList[];

    @Input() listHeading: string;
    @Input() itemList: ISideList[];
    @Output() result = new EventEmitter<any>();

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        this.sideListForm = this.fb.group({
            Search: ['']
        });

        this.displayItemList = this.itemList;
    }

    routeTo(key: any) {
        this.result.emit(key);
    }

    pinSideList() {
        this.sideListIsPinned = !this.sideListIsPinned;
    }

    filterList(value: string) {
        this.displayItemList = this.itemList.filter(
            item => item.name.toUpperCase().includes(value.toUpperCase()));
    }
}