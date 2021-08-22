import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import { QuotesComponent } from '../quotes/quotes.component';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
 @Input() quotes: Quote | undefined;
 @Output() isComplete=new EventEmitter<boolean>();
 
quoteDelete(complete:boolean){
  this.isComplete.emit(complete);
}

likes: number = 0;
dislike: number = 0;

//function for like
onClickLikes() {
  this.likes++;

};
onClickDislike() {
  this.dislike++;
};

 
  constructor() { }

  ngOnInit(): void {
  }

}