import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent {

  constructor(private router: Router){


    
  }

  goToProductos(){

    this.router.navigate(['productos'], {queryParams: {type: 'Hola Mundo'}});

  }

  goToPedidos(){

    const id: number = 15;
    this.router.navigate([`pedidos/${id}`], {queryParams: {type: 'Hola Mundo'}});

  }

}
