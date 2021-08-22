import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote (1, '“Wise men speak because they have something to say; fools because they have to say something.” — Plato' ,  'Worry Not', 'Antony', 0 , 0, new Date(2021,8,22) ),
    new Quote (2,'“Strive not to be a success, but rather to be of value.','Happiness' , 'Albert-Einstein ',0, 0, new Date(2021,8,22)),
    new Quote (3,'“If opportunity doesn’t knock, build a door.”— Milton-Berle', 'Men and Wealth' , 'Thomas', 0, 0, new Date(2021,8,22)),
    new Quote (4, '“Happiness is when what you think, what you say, and what you do are in harmony.” — Mahatma Gandhi', 'Harmony', 'Kai', 0, 0, new Date(2021,8,22)),
    new Quote (5,'“Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind..” Bernard-M-Baruch' ,'Take a Risk', 'Phyl', 0, 0, new Date(2021,8,22)),
    new Quote (6, '"Be yourself; everyone else is already taken.”— Oscar Wilde' ,'Give', 'Jay', 0, 0, new Date(2021,8,22)),
  ];


  toggleDetails(index: string | number) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuote(isComplete: any, index: number) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  addNewQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.publishDate = new Date(quote.publishDate)
    this.quotes.unshift(quote)

  }



  constructor() { }

  ngOnInit(): void {
  }

}
