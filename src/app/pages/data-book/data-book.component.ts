import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/bookModel';
import data from 'src/app/data/books.json';
import { appear } from 'src/app/animations/appearAnimation';
import { ReadingListService } from 'src/app/services/reading-list.service';

@Component({
  selector: 'app-data-book',
  templateUrl: './data-book.component.html',
  animations: [appear]
})
export class DataBookComponent implements OnInit {

  data: Book[] = data.library;
  book: Book | any;

  constructor(private route: ActivatedRoute, private readingListService: ReadingListService) {
  }

  ngOnInit(): void {
    this.subscribeToParams()
  }

  subscribeToParams() {
    this.route.url.subscribe(event => {
      this.book = this.data.filter(book => book.book.ISBN == event[1].path)[0]
    })
  }

  addBook() {
    this.readingListService.addBook(this.book)
  }

}
