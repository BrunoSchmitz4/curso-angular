import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  show: boolean = false;

  constructor() { }

  ngOnInit(): void {}

  showMsg(): void {
    this.show = !this.show;//toggle é um recurso e inversão de valores. Funciona como loop de variáveis booleanas e sempre mantém o valor oposto ao do estado atual, assim o evento pode ser acionado várias vezes
  }
}

// Continuar na aula 11