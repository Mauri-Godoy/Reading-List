import { Component, OnInit } from '@angular/core';

import data from 'src/app/data/books.json';
import { Book } from 'src/app/models/bookModel';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html'
})
export class LibraryComponent {

  library: Book[] = data.library;

}
