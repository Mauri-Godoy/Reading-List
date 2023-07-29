import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/bookModel';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html'
})
export class BookComponent {

  faTrash = faTrash;

  @Input()
  book!: Book;

  @Input()
  readingList: boolean = false;

  @Output() deleteEvent = new EventEmitter<string>();

  delete(): void {
    this.deleteEvent.emit(this.book.book.ISBN);
  }
}
