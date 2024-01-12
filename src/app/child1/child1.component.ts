import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  providers :[NumberService]
})
export class Child1Component 
{
  public CheckPrime : any;

  constructor(private obj : NumberService)
  {
    this.CheckPrime = obj.CheckPrime(20)
  }
}
