import { Component, OnInit, OnChanges } from '@angular/core'

 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'quotes',
    templateUrl: 'app/components/quotes/quotes.component.html'
})

export class QuotesComponent implements OnInit, OnChanges {

    quoteList: object[];
    selectedQuoteId: number;

    constructor(private fb: FormBuilder) { }

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

}  