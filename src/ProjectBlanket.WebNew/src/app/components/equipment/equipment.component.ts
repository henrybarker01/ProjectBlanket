import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipmentService } from '../../services/equipment.service';
import { AlertService } from '../../services/alert.service';
import { CalibrationModel } from "../../models/equipment/calibration";
import { EquipmentModel } from "../../models/equipment/equipment";

@Component({
  selector: 'equipment',
  templateUrl: 'equipment.component.html'
})



export class EquipmentComponent implements OnInit {

  constructor(//private fb: FormBuilder,
    private _equipmentService: EquipmentService,
    private alertService: AlertService) { }

  equipment: EquipmentModel;
  // calibrationList: CalibrationModel[];
  isPinned: boolean = false;
  equipmentList: object[];
  fileInput: File;
  files: FileList;


  ngOnInit(): void {
    this.equipment = new EquipmentModel;
    this.equipment.calibrationList = [];
    // this.equipmentForm = this.fb.group({
    //   id: [''],
    //   name: ['', Validators.required],
    //   description: ['', Validators.required],
    //   model: ['', Validators.required],
    //   serialNumber: ['', Validators.required],
    //   initialCost: ['', Validators.required],
    //   isCalibrated: [false, Validators.required],
    //   calibrationList: [[CalibrationModel]]
    //
    // });

    this._equipmentService.list().subscribe((data) => {
      this.equipmentList = [];
      data.json().forEach((item) => {
        this.equipmentList.push({
          id: item.id,
          description: item.name
        });
      });
    });

    this.isPinned = localStorage.getItem('sideListIsPinned') === 'true';
  }

  addCalibration() {
    // if (this.equipment.calibration === undefined)
    //  this.equipment.calibration = [];
    this.equipment.calibrationList.push(new CalibrationModel);
  }

  ngOnChanges(item) {

  }

  pinSideList(val: any) {
    this.isPinned = val;
  }

  sumbit() {
    this._equipmentService.put(this.equipment).subscribe(
      data => {
        this.alertService.success('Registration successful', true);
        this.equipment.id = data.id;
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
  }

  getFiles(event, calibration) {
    let reader = new FileReader();
    reader.onload = function () {

      let arrayBuffer = this.result,
        array = new Uint8Array(arrayBuffer);
       // binaryString = String.fromCharCode.apply(null, array);

        calibration.calibrationCertificate = array;

    }
     //reader.readAsArrayBuffer(event.target.files[0]);
    calibration.fileName = event.target.files[0].name;
    //this.files = event.target.files;
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
