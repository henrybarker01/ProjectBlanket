import { Component, OnInit } from '@angular/core'
import {EquipmentService} from "../../../../services/equipment.service";
import * as _ from 'lodash';

@Component({
  selector: 'calibtation-due-widget',
  templateUrl: 'calibration-due-widget.component.html'
})

export class CalibrationDueWidget implements OnInit {

  constructor(private _equipmentService: EquipmentService) {
    
  }

  equipmentList: object[];

  ngOnInit() {
    this._equipmentService.getCalibrationsDueInSixMonths().subscribe((data) => {
      this.equipmentList = _.values(data);
    });
  }
}
