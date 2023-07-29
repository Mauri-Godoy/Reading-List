import { Component, OnInit } from '@angular/core';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { Book } from 'src/app/models/bookModel';
import { ReadingListService } from 'src/app/services/reading-list.service';

@Component({
  selector: 'app-reading-list',
  templateUrl: './reading-list.component.html'
})
export class ReadingListComponent {

  faList = faList
  show: boolean = false

  constructor(private readingListService: ReadingListService) {
  }

  get readingList(): Book[] {
    return this.readingListService.readingList
  }

  get expand() {
    return this.readingList.length > 0 && this.show
  }

  delete(ISBN: string): void {
    this.readingListService.delete(ISBN)
  }
}
