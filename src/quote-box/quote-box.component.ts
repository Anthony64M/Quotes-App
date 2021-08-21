import { Quote } from "@angular/compiler";
import { BoundText } from "@angular/compiler/src/render3/r3_ast";
import { Component } from "@angular/core";
import { QuoteService } from "src/services/quote.services";

@Component({
    selector: 'quote-box',
    templateUrl: './quote-box.component.html',
    styleUrls: ['./quote-box.component.css']
})
export class QuoteBoxComponent{
    public quote = new Quote ('','');
    constructor(public quoteService: QuoteService){
        this.quoteService.getRandomQuote()._subscribe((data: Quote) =>{
            this.quote = new Quote(data.quote, data.author);         
            console.log(this.quote)
        });
    }
}