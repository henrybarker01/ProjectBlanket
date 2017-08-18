import { Component, EventEmitter, Input, Output } from '@angular/core'
import { ISideList } from '../../Model/SideMenuList/side-list'

@Component({
    selector: 'side-list',
    templateUrl: 'app/components/side-list/side-list.component.html'
})

export class SideListComponent {


    @Input() listHeading: string;
    @Input() itemList: object[];
    @Output() result = new EventEmitter<any>();

    ngOnInit(): void {

    }

    routeTo(key: any) {
        this.result.emit(key);         
    }
}