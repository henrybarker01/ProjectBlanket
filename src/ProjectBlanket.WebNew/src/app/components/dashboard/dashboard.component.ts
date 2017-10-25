import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { Component, OnInit, OnChanges, ComponentFactoryResolver, ViewContainerRef, NgModule, Input, ComponentFactory, ComponentRef, ChangeDetectorRef, ViewChild, Output, EventEmitter } from '@angular/core'
import { DashboardService } from '../../services/dashboard.service';
import { Global } from '../../shared/global';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser'
import * as _ from 'lodash';

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent {//implements OnInit {

  options: GridsterConfig;
  availableWidgets: Array<GridsterItem>;
  @Input() addedWidgets: Array<GridsterItem>;
  _dashboardService: DashboardService;


  constructor(private dashboardService: DashboardService) {
    this._dashboardService = dashboardService;
  }

  ngOnInit() {

    this.addedWidgets = [];



    this.options = {
      itemChangeCallback: (item: any) => {
        this._dashboardService.saveDashboard(this.addedWidgets).subscribe((result) => { });
      },
      itemResizeCallback: () => {
       // this._dashboardService.saveDashboard(this.addedWidgets).subscribe((result) => { });
      },

      gridType: 'fit',
      compactType: 'none',
      //  itemInitCallback: DashboardComponent.itemInit,
      margin: 5,
      outerMargin: true,
      mobileBreakpoint: 640,
      minCols: 4,
      maxCols: 10,
      minRows: 4,
      maxRows: 10,
      maxItemCols: 100,
      minItemCols: 1,
      maxItemRows: 100,
      minItemRows: 1,
      maxItemArea: 2500,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 105,
      fixedRowHeight: 105,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      //  emptyCellClickCallback: this.emptyCellClick.bind(this),
      // emptyCellContextMenuCallback: this.emptyCellClick.bind(this),
      // emptyCellDropCallback: this.emptyCellClick.bind(this),
      // emptyCellDragCallback: this.emptyCellClick.bind(this),
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      draggable: {
        enabled: true,
        ignoreContentClass: 'gridster-item-content',
        ignoreContent: false,
        dragHandleClass: 'drag-handler',
        // stop: AppComponent.eventStop
      },
      resizable: {
        enabled: true,
        //  stop: AppComponent.eventStop,
        handles: {
          s: true,
          e: true,
          n: true,
          w: true,
          se: true,
          ne: true,
          sw: true,
          nw: true
        }
      },
      api: {
        //   resize: AppComponent.eventStop,
        //  optionsChanged: AppComponent.eventStop,
        //  getNextPossiblePosition: AppComponent.eventStop,
      },
      swap: false,
      pushItems: true,
      pushResizeItems: false,
      displayGrid: 'onDrag&Resize',
      disableWindowResize: false
    };

    this.availableWidgets = [
      { name: 'quoteWidget', description: 'Quote List', cols: 2, rows: 1, y: 0, x: 0 },
      { name: 'calibrationWidget', description: 'Calibrations Due', cols: 2, rows: 2, y: 0, x: 2 },
      { name: 'testAgain', description: 'Tester', cols: 2, rows: 1, y: 0, x: 0 },
    ];

    this._dashboardService.getLayout().subscribe((data) => {
      this.addedWidgets = _.values(data);

      this.addedWidgets.forEach((widget) => {
        var index = this.availableWidgets.indexOf((x) => {
          return x.name === widget.name;
        });
        this.availableWidgets.splice(index, 1);
      });
    });


  }




  public saveDashboard() {
    this._dashboardService.saveDashboard(this.addedWidgets).subscribe((result) => { });
  }

  addWidget(widgetName) {
    let index = this.availableWidgets.findIndex((item) => {
      return item.name === widgetName;
    });
    this.addedWidgets.push(this.availableWidgets[index]);
    this.availableWidgets.splice(index, 1);
    this._dashboardService.saveDashboard(this.addedWidgets).subscribe((result) => { });
  }

  removeItem(item: any) {
    this.addedWidgets.splice(this.addedWidgets.indexOf(item), 1);
    this.availableWidgets.push(item);
    this._dashboardService.saveDashboard(this.addedWidgets).subscribe((result) => { });
  }


}
