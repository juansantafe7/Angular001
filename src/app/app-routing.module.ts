import { UnoTresModule } from './pages/uno/uno-tres.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UnoComponent } from './pages/uno/uno.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { DosComponent } from './pages/dos/dos.component';
import { TresComponent } from './pages/tres/tres.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { UnoDosComponent } from './pages/uno/uno-dos/uno-dos.component';
import { UnoTresComponent } from './pages/uno/uno-tres/uno-tres.component';
import { UnoCuatroComponent } from './pages/uno/uno-cuatro/uno-cuatro.component';

const routes: Routes = [

  {path: 'uno', component: UnoComponent, title: 'Uno - Clase 2', loadChildren: () => import('./pages/uno/uno-tres.module').then(m => m.UnoTresModule)},
  {path: 'dos', component: DosComponent, title: 'Dos - Clase1'},
  {path: 'tres', component: TresComponent, title: 'Tres - Clase1'},
  {path: '', redirectTo: 'uno', pathMatch: 'full'},
  {path: 'productos', component: ProductosComponent, title: 'Productos - Clase1'},
  {path: 'pedidos/:id', component: PedidosComponent, title: 'Pedidos - Clase1'},
  {path: '**', component: NotFoundComponent, title: 'Not Found - Clase1'}

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [

    RouterModule

  ]
})
export class AppRoutingModule { }
