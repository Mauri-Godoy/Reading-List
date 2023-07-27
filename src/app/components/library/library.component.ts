import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    this.categoryFilter();
    this.searchFilter();

  }

  categoryFilter() {
    this.filterService.category.subscribe(category => {
      this.library = category ? this.data.filter(book => book.book.genre == category) : this.data
    })
  }

  searchFilter() {
    this.filterService.search.subscribe(search => {
      this.library = search ? this.data.filter(book => {
        search = search.toLowerCase();
        const title: string = book.book.title.toLowerCase();
        const author: string = book.book.author.name.toLowerCase();
        const year: string = book.book.year.toString();

        return title.toLowerCase().includes(search) || author.toLowerCase().includes(search) || year.includes(search)
      }) : this.data
    })
  }
}
