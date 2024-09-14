import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBookInfo(title: string): Observable<any> {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${title}`;
    return this.http.get<any>(url);
  }
}
