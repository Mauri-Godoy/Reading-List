import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Book } from '../models/bookModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReadingListService {

  get readingList(): Book[] {
    const item = window.localStorage.getItem("readingList");

    const res: Book[] = item ? JSON.parse(item) : []

    return res;
  }

  addBook(book: Book) {
    const items: Book[] = this.readingList;

    if (!items.map(r => r.book.ISBN).includes(book.book.ISBN)) {
      items.push(book);
      window.localStorage.setItem("readingList", JSON.stringify(items));
    }
  }

  delete(ISBN: string): void {
    const items: Book[] = this.readingList;
    const i: number = items.findIndex(x => x.book.ISBN === ISBN);
    if (i !== -1) {
      items.splice(i, 1);
      window.localStorage.setItem("readingList", JSON.stringify(items));
    }
  }
}
