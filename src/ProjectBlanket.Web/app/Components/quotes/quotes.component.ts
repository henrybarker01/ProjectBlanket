import { Component, OnInit, OnChanges } from '@angular/core'
import { QuoteService } from '../../Service/quote.service';
import { Global } from '../../Shared/global';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Quoteservice = require("../../Service/quote.service");
 

@Component({
    selector: 'quotes',
    templateUrl: 'app/components/quotes/quotes.component.html'
})

export class QuotesComponent implements OnInit, OnChanges {

    quoteList: object[];
    selectedQuoteId: number;

    constructor(private fb: FormBuilder, private _quoteService: QuoteService) { }
 

    ngOnInit(): void{
        this.quoteList = [{
            key: 1,
            name:'Quote One'
        }, {
            key: 2,
            name: 'Quote Two'
            }]
        
    }

    ngOnChanges(val: any) {
        this.selectedQuoteId = val;
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