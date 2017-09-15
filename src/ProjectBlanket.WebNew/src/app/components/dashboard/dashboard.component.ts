import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { Component, OnInit, OnChanges } from '@angular/core'
import { QuoteService } from '../../services/quote.service';
import { Global } from '../../shared/global';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import Quoteservice = require("../../services/quote.service");


@Component({
   
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent {//implements OnInit {

  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  
  
  
  constructor(private fb: FormBuilder, private _quoteService: QuoteService) { }
  
  itemChange(item: any, itemComponent: any) {
      console.info('itemChanged', item, itemComponent);
  }
  
  itemResize(item: any, itemComponent: any) {
      console.info('itemResized', item, itemComponent);
  }
  
  ngOnInit() {
      this.options = {
          itemChangeCallback: this.itemChange,
          itemResizeCallback: this.itemResize,
      };
  
      this.dashboard = [
          { cols: 2, rows: 1, y: 0, x: 0 },
          { cols: 2, rows: 2, y: 0, x: 2 }
      ];
  }
  
  changedOptions() {
      this.options.api.optionsChanged();
  }
  
  removeItem(item: any) {
      this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }
  
  addItem() {
      this.dashboard.push({});
  }


}
//}







