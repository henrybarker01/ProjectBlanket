import { Component, OnInit, OnChanges } from '@angular/core'
import { QuoteService } from '../../services/quote.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Global } from '../../shared/global';
import * as _ from 'lodash';

@Component({
  selector: 'quotes',
  templateUrl: 'quotes.component.html'
})

export class QuotesComponent implements OnInit, OnChanges {

  quoteList: object[];
  selectedQuoteId: number;
  isPinned: boolean = false;
  quoteForm: FormGroup;

  constructor(private fb: FormBuilder, private _quoteService: QuoteService) { }


  ngOnInit(): void {
    this._quoteService.list().subscribe((data) => {
      this.quoteList = [];
       _.values(data).forEach((item) => {
         this.quoteList.push({
           id: item.id,
           description: item.quoteNumber
         });
       });
     });

    this.isPinned = localStorage.getItem('sideListIsPinned') === 'true';

    this.quoteForm = this.fb.group({
      quoteNumber: [''],
      //password: ['', Validators.required],
      //confirmPassword: ['', Validators.required]
    });
  }

  ngOnChanges(val: any) {
    this.selectedQuoteId = val;
  }

  pinSideList(val: any) {
    this.isPinned = val;
  }

  addQuote() {
    this._quoteService.post(Global.BASE_USER_ENDPOINT).subscribe(
      data => {

      },
      error => {

      }
    );;
  }

}  
