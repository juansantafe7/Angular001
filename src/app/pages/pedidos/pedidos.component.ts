import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((data) => {

      console.log(data['id']);

    });
    
  }

}
