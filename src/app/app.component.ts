
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BookService } from './book.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showBar = true; 
  bookTitle = ''; 
  bookInfo: any;
  loading = false;

  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit(): void {
    alert("Bem-Vind@ Bíbliofilo!");
    var nome = String(prompt("Qual seu nome?"));
    alert("Aproveite os resumos dos melhores livros" + nome + "!");

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
       
        this.showBar = !(event.url === '/about');
      }
    });
  }

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
