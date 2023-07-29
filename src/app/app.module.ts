import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BookComponent } from './components/book/book.component';
import { LibraryComponent } from './components/library/library.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component'
import { FormsModule } from '@angular/forms';
import { DataBookComponent } from './pages/data-book/data-book.component';
import { ReadingListComponent } from './components/reading-list/reading-list.component';
import { ToastrModule } from 'ngx-toastr';
import { ReadingListService } from './services/reading-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    LibraryComponent,
    FooterComponent,
    NavbarComponent,
    DataBookComponent,
    ReadingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 3500,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    })
  ],
  providers: [ReadingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
