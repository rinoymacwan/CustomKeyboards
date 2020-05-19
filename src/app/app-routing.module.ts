import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { FAQComponent } from './faq/faq.component';
import { SixKeyComponent } from './six-key/six-key.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'products/six-key', component: SixKeyComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'faq', component: FAQComponent},
  { path: '', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
