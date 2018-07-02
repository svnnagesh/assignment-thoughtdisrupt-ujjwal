import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';

const appRoute:Routes = [

  { path:'', component:HomeComponent },
  { path:'products', component:ProductsComponent },
  { path:'services', component:ServicesComponent },
  { path:'contact', component:ContactComponent }
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ProductsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
