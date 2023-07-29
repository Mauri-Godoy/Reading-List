import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import data from 'src/app/data/books.json';
import { Book } from 'src/app/models/bookModel';
import { FilterService } from 'src/app/services/filter.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  faSearch = faSearch
  genreList: Set<string> = new Set([])
  library: Book[] = data.library;
  category: string = "";
  search: string = "";

  constructor(private filterService: FilterService, private router: Router) {
    this.genreList = new Set(this.library.map(b => b.book.genre));
  }

  setCategory() {
    this.search = ""
    this.filterService.setCategory(this.category)
  }

  setSearch() {
    this.router.navigate(['/home']).then(() => {
      this.category = ""
      this.filterService.setSearch(this.search)
    })
  }

  clean() {
    this.category = ''
    this.search = ''
    this.filterService.setSearch(this.search)
    this.filterService.setCategory(this.category)
  }
}
