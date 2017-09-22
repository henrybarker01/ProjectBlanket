import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipmentService } from '../../services/equipment.service';
import { AlertService } from '../../services/alert.service';
 

@Component({
  selector: 'equipment',
  templateUrl: 'equipment.component.html'
})

export class EquipmentComponent implements OnInit {
   
  constructor(private fb: FormBuilder,
    private _equipmentService: EquipmentService,
    private alertService: AlertService) { }

  equipmentForm: FormGroup;
  isPinned: boolean = false;
  equipmentList: object[];
  fileInput: File;
  files: FileList; 

  ngOnInit(): void {
    this.equipmentForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      description: ['', Validators.required],
      model: ['', Validators.required],
      serialNumber: ['', Validators.required],
      initialCost: ['', Validators.required],
      isCalibrated: [false, Validators.required],
      calibrationCertificate:['']
    });

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

  ngOnChanges(item) {

  }

  pinSideList(val: any) {
    this.isPinned = val;
  }

  sumbit() {
    this._equipmentService.put(this.equipmentForm.value).subscribe(
      data => {
        this.alertService.success('Registration successful', true);
        this.equipmentForm.value.id = data.id;
        if (this.equipmentList === undefined)
            this.equipmentList = [];
        this.equipmentList.push(this.equipmentForm.value);
      },
      error => {
        this.alertService.error(error);
      });
  }

  getFiles(event) {
    this.files = event.target.files;
  }

  upload() {
    let fileBrowser = this.fileInput ;
   // if (fileBrowser.files && fileBrowser.files[0]) {
      const formData = new FormData();
  //    formData.append("image", fileBrowser.files[0]);
     // this.projectService.upload(formData,).subscribe(res => {
        // do stuff w/my uploaded file
     // });
    }
  }

