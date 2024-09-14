import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component'; 
import { HeaderComponent } from './componets/header/header.component'; // Certifique-se do caminho
import { FooterComponent } from './componets/footer/footer.component'; // Certifique-se do caminho
import { FormsModule } from '@angular/forms';

const routes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    FooterComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
