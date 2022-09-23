import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nome
  esconderCaixa = true
  numero

  escolher(){
    this.numero = Math.floor(Math.random() * 100) + 1
  }

  alterarNome(nome){
    console.log(nome.target.value)
    this.nome = nome.target.value
  }
  adicionar(nomeInput){
    this.nome = nomeInput.value
    this.esconderCaixa = nomeInput.value.length <= 0
    // console.log(nomeInput.value)
    //console.log("Adicionando...")
  }

  // nome = "Leonardo"
  // idade = 20

  // lancarDado(){
  //   return Math.floor(Math.random() * 6) + 1
  // }
}
