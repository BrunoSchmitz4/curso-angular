import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = "Bruno";// Variável string
  age: number = 18;// Variável numérica
  job = 'programador';// Variável sem pré-definição de valor, ele é determinado com base no valor que lhe é inicializado
  hobbies = ['Jogar', ' Estudar programação', ' e Dormir (quem disse que não é um?)']; // Lista
  // Criação de variável com Typescript
  gato = {
    name: "Steve",
    raca: "rajado",
    hobbie: "dormir"
  }
  constructor() 
  {

  }

  ngOnInit(): void 
  {

  }

}
