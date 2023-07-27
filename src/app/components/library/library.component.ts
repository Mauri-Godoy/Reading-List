import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { appear } from 'src/app/animations/appearAnimation';

import data from 'src/app/data/books.json';
import { Book } from 'src/app/models/bookModel';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  animations: [appear]
})
export class LibraryComponent implements OnInit {

  data: Book[] = data.library;
  library!: Book[];

  constructor(private filterService: FilterService) {
    this.library = this.data;
  }

  ngOnInit(): void {
    this.filter();
    this.search();
  }

  filter() {
    this.filterService.category.subscribe(category => {
      this.library = category ? this.data.filter(book => book.book.genre == category) : this.data
    })
  }

  search() {
    this.filterService.search.subscribe(search => {
      this.library = search ? this.data.filter(book => book.book.title.toLowerCase().includes(search.toLowerCase())) : this.data
    })

  }
}
