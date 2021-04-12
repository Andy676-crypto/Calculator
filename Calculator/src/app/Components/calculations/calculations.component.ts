import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.css']
})
export class CalculationsComponent implements OnInit {

  public val: number;

  constructor() { }

  ngOnInit(): void {
    this.val = 24;
  }

  sum(): void{

   console.log('test', this.val);

  }
}
