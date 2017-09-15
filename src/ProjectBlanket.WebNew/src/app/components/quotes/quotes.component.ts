import { Component, OnInit, OnChanges } from '@angular/core'
import { QuoteService } from '../../services/quote.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Global } from '../../shared/global';

@Component({
  selector: 'quotes',
  templateUrl: 'quotes.component.html'
})

export class QuotesComponent implements OnInit, OnChanges {

  quoteList: object[];
  selectedQuoteId: number;
  isPinned: boolean = false;

  constructor(private fb: FormBuilder, private _quoteService: QuoteService) { }


  ngOnInit(): void {
    this.quoteList = [
      {
        key: 1,
        name: 'Quote One'
      }, {
        key: 2,
        name: 'Quote Two'
      }
    ];
    this.isPinned = localStorage.getItem('sideListIsPinned') === 'true';
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
