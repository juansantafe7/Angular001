import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UnoComponent } from './pages/uno/uno.component';
import { DosComponent } from './pages/dos/dos.component';
import { TresComponent } from './pages/tres/tres.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ProductosComponent } from './pages/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    UnoComponent,
    DosComponent,
    TresComponent,
    NotFoundComponent,
    PedidosComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
