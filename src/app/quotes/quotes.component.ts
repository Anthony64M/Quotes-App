import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'welcome to Quote-App where all quotes are techy';
  quotes:Quote[] = [
    new Quote (1,'Anthony','Human spirit','The human spirit must prevail over technology to allow humans be in charge.','Albert Einstein', new Date(2021,8,22),0,0),
    new Quote (2,'Victoria','Technology…','Technology… the knack of so arranging  that we don’t have to experience it.','Max Frisch',new Date(2021,8,22),0,0),
    new Quote (3,'Sherchyl','The great myth','The great myth of our times is that technology is communication.','Libby Larsen',new Date(2021,8,22),0,0),
    new Quote (4,'Jymal','Communication','Communications tools don’t get socially interesting until they get technologically boring.','Clay Shirky',new Date(2021,8,22),0,0),
    new Quote (5,'Wilson','Code and people','Programs must be written for people to read, and only incidentally for machines to execute.','Harold Abelson',new Date(2021,8,22),0,0),
    new Quote (6,'TrapLord','Tech and life','For a list of all the ways technology has failed to improve the quality of life, please press three.','Alice Kahn',new Date(2021,8,22),0,0)
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  addedQuote(quote: Quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    // quote.completeDate = new Date( quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead: any, index: number){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
 
  displayInfo( index: string | number){
    // this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  constructor() { }

  ngOnInit() {
  }

}
