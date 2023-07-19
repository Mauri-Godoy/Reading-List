import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/bookModel';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html'
})
export class BookComponent {

  @Input()
  book!: Book;
}
