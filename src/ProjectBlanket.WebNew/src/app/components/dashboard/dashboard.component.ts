import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { Component, OnInit, OnChanges, ComponentFactoryResolver, ViewContainerRef, NgModule, Input, ComponentFactory, ComponentRef, ChangeDetectorRef, ViewChild, Output, EventEmitter } from '@angular/core'
import { QuoteService } from '../../services/quote.service';
import { Global } from '../../shared/global';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { QuoteWidget } from './widgets/quote-widget/quote-widget.component';

import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent {//implements OnInit {

  options: GridsterConfig;
  availableWidgets: Array<GridsterItem>;
  addedWidgets: Array<GridsterItem>;

  @ViewChild("dynamicComponentContainer", { read: ViewContainerRef }) container;
  //componentRef: ComponentRef<QuoteWidget>;

  constructor(private fb: FormBuilder, private _quoteService: QuoteService, private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef, private resolver: ComponentFactoryResolver) { }



  itemChange(item: any, itemComponent: any) {
    console.info('itemChanged', item, itemComponent);
  }

  itemResize(item: any, itemComponent: any) {
    console.info('itemResized', item, itemComponent);
  }

  //createComponent(type) {
  //  this.container.clear();
  //  const factory: ComponentFactory<QuoteWidget> = this.resolver.resolveComponentFactory(QuoteWidget);

  //  this.componentRef = this.container.createComponent(factory);

  //  this.componentRef.instance.type = type;

  //  this.componentRef.instance.output.subscribe(event => console.log(event));
  //}

  //private sayHello() {
  //  const factory = this.componentFactoryResolver.resolveComponentFactory(QuoteWidget);
  //  const ref = this.viewContainerRef.createComponent(factory);
  //  ref.changeDetectorRef.detectChanges();
  //}

  ngOnInit() {

    this.addedWidgets = [];

    this.options = {
      itemChangeCallback: this.itemChange,
      itemResizeCallback: this.itemResize,

      gridType: 'fit',
      compactType: 'none',
      //  itemInitCallback: DashboardComponent.itemInit,
      margin: 5,
      outerMargin: true,
      mobileBreakpoint: 640,
      minCols: 1,
      maxCols: 100,
      minRows: 1,
      maxRows: 100,
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
  }

  addWidget(widgetName) {
    let index = this.availableWidgets.findIndex((item) => {
      return item.name === widgetName;
    });
   
    this.addedWidgets.push(this.availableWidgets[index]);
    this.availableWidgets.splice(index, 1);
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  removeItem(item: any) {
    this.addedWidgets.splice(this.addedWidgets.indexOf(item), 1);
    this.availableWidgets.push(item);
  }

  saveDashboard() {
    
  }
}
