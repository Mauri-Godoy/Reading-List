import { Component, OnInit } from '@angular/core';
import { appear } from 'src/app/animations/appearAnimation';

import data from 'src/app/data/books.json';
import { Book } from 'src/app/models/bookModel';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  animations: [appear]
})
export class LibraryComponent {

  library: Book[] = data.library;

}
