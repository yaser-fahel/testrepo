import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header/header-nav/header-nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsPageComponent } from './products-page/products-page.component';

const routes: Routes = [
  { path: 'product/:id', component: ProductsPageComponent },  // Product details page
  // Other routes go here
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    ProductsPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
