import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'page-header',
  templateUrl:'page-header.component.html'
})
 

export class HeaderComponent {
  @Input() heading: string;
  @Input() name: string;
  @Output() submit: EventEmitter<any> = new EventEmitter();

  onSubmit() {
    this.submit.emit();
  }


}
