import { Component } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bookTitle = ''; 
  bookInfo: any;
  loading = false;

  constructor(private bookService: BookService) { }

  searchBook() {
    if (this.bookTitle.trim() === '') {
      return; 
    }

    this.loading = true;
    this.bookService.getBookInfo(this.bookTitle).subscribe(
      data => {
        if (data && data.items && data.items.length > 0) {
          this.bookInfo = data.items[0].volumeInfo;

          
          console.log(this.bookInfo); 
        } else {
          this.bookInfo = null;
        }
        this.loading = false;
      },
      error => {
        console.error('Erro ao obter informações do livro', error);
        this.loading = false;
      }
    );
  }
}
