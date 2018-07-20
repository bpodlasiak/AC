import { Component, OnInit } from '@angular/core';
import { Button } from '../../../node_modules/protractor';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent implements OnInit {

  public num1 :number;
  public num2 :number;
  public result :number;
  public static wynik;

  cal_substract(){
    this.result = this.num1-this.num2;
  }
  cal_add(){
    this.result = this.num1+this.num2;
  }
  cal_multiply(){
    this.result = this.num1*this.num2;
  }
  cal_divide(){
    this.result = this.num1/this.num2;
  }
   


  history1(){
  var g = this.num1 + " - " + this.num2; 
  var g1 = " = " + this.result;
  CalComponent.wynik = g+g1;
  }
  
history2(){
  var g = this.num1 + " + " + this.num2; 
  var g1 = " = " + this.result;
  CalComponent.wynik = g+g1;
  }

history3(){
  var g = this.num1 + " * " + this.num2; 
  var g1 = " = " + this.result;
  CalComponent.wynik = g+g1;
  }

history4(){
  var g = this.num1 + " / " + this.num2; 
  var g1 = " = " + this.result;
  CalComponent.wynik = g + g1;
  }

  history(){
    const el = document.createElement("div");
        el.id = "bloczek";
        el.innerText = CalComponent.wynik;
        el.classList.add("uber-element");
        var x = document.querySelector(".test-first").appendChild(el);
  }

  constructor() { }

  ngOnInit() {
  }

}
