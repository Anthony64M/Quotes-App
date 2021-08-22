import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detailes',
  templateUrl: './quote-detailes.component.html',
  styleUrls: ['./quote-detailes.component.css']
})
export class QuoteDetailesComponent implements OnInit {

  likes = 0
  dislikes = 0

  @Input() quote: Quote | undefined;
  @Output() isComplete = new EventEmitter<boolean>();
  @Output() isPlus = new EventEmitter<boolean>();
  @Output() isMinus = new EventEmitter<boolean>();


  quoteComplete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  //likes and dislikes
  likesAdd(plus: boolean) {
    this.isPlus.emit(plus);
  }
  likesMinus(minus: boolean) {
    this.isMinus.emit(minus);
  }

  like() {
    this.likes = this.likes += 1;
  }
  hate() {
    this.dislikes = this.dislikes += 1;
  }



  constructor() { }

  ngOnInit(): void {
  }

}
