import { Component, OnInit, Input} from '@angular/core'

@Component({
  selector: 'page-header',
  templateUrl:'page-header.component.html'
})
 

export class HeaderComponent {
  @Input() heading: string;
  @Input() name: string;
}
