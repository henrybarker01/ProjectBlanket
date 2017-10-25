import { Component, OnInit, OnChanges } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipmentService } from '../../services/equipment.service';
import { AlertService } from '../../services/alert.service';
import { CalibrationModel } from "../../models/equipment/calibration";
import { EquipmentModel } from "../../models/equipment/equipment";
import { Observable } from "rxjs/Rx";

import { FileUploader } from 'ng2-file-upload';
import * as _ from 'lodash';

@Component({
  selector: 'equipment',
  templateUrl: 'equipment.component.html'
})



export class EquipmentComponent implements OnInit, OnChanges {

  uploader = new FileUploader({
    url: 'https://evening-anchorage-3159.herokuapp.com/api/'
  });

  hasBaseDropZoneOver: boolean;
  hasAnotherDropZoneOver: boolean;
  response: string;

  //review
  equipment: EquipmentModel;
  isPinned: boolean = false;
  equipmentList: object[];
  fileInput: File;
  files: FileList;

  constructor(
    private _equipmentService: EquipmentService,
    private alertService: AlertService) {
  }


  ngOnChanges(val: any) {
    this.equipment.id = val;
    this._equipmentService.get(val).subscribe((data) => {
      this.equipment = <EquipmentModel>data;
    });

  }

  addEquipment() {
    this.equipment = new EquipmentModel;
  }

  ngOnInit(): void {
    this.equipment = new EquipmentModel;
    this.equipment.calibrationList = [];
   
    this._equipmentService.list().subscribe((data) => {
      this.equipmentList = [];
      _.values(data).forEach((item) => {
        this.equipmentList.push({
          id: item.id,
          description: item.name
        });
      });
    });

    this.isPinned = localStorage.getItem('sideListIsPinned') === 'true';
  }

  addCalibration() {
    if (this.equipment.calibrationList === undefined)
      this.equipment.calibrationList = [];
    this.equipment.calibrationList.push(new CalibrationModel);
  }

  removeCalibration(calibration: any) {
    let index = this.equipment.calibrationList.indexOf(calibration);
    this.equipment.calibrationList.splice(index, 1);
  }



  pinSideList(val: any) {
    this.isPinned = val;
  }

  submit() {
    if (this.equipment.id === undefined) {
      this._equipmentService.put(this.equipment).subscribe(
        data => {
          this.alertService.success('Equipment added!', true, 1500);
          this.equipment.id = data;
          if (this.equipmentList === undefined)
            this.equipmentList = [];
          this.equipmentList.push(
            {
              id: this.equipment.id,
              description: this.equipment.name
            });
        },
        error => {
          this.alertService.error(error);
        });
    } else {

    }
  }

  getFiles(event, calibration) {


    let fr = new FileReader();
    let data = new Blob([event.target.files[0]]);
    fr.readAsArrayBuffer(data);



    // file.map((fileData) => {
    calibration.fileName = event.target.files[0].name;
    calibration.calibrationCertificate = data;
    return calibration;
    //});

  }

  upload() {
    let fileBrowser = this.fileInput;
    // if (fileBrowser.files && fileBrowser.files[0]) {
    const formData = new FormData();
    //    formData.append("image", fileBrowser.files[0]);
    // this.projectService.upload(formData,).subscribe(res => {
    // do stuff w/my uploaded file
    // });
  }
}
