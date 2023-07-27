import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  private category$: BehaviorSubject<string> = new BehaviorSubject("");
  private search$: BehaviorSubject<string> = new BehaviorSubject("");

  get category(): Observable<string> {
    return this.category$.asObservable()
  }

  get search(): Observable<string> {
    return this.search$.asObservable()
  }

  setCategory(category: string) {
    this.category$.next(category);
  }

  setSearch(search: string) {
    this.search$.next(search);
  }
}
