import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'equipment',
  templateUrl: 'equipment.component.html'
})

export class EquipmentComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  equipmentForm: FormGroup;
  isPinned: boolean = false;
  equipmentList: object[];

  ngOnInit(): void {
    this.equipmentForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      model: ['', Validators.required],
      serialNumber: ['', Validators.required],
      initialCost: ['', Validators.required],
      isCalibrated: [false, Validators.required]
    });
  }

  ngOnChanges(item) {

  }

  pinSideList(val: any) {
    this.isPinned = val;
  }

  sumbit() {
    
  }
}
