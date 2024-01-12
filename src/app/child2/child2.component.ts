import { Component } from '@angular/core';
import { StringService } from '../string.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  providers :[StringService]
})

export class Child2Component 
{
  public Value : number = 0;
  public Word :string ="Aarti Wamane"

  constructor(private obj :StringService)
  {
    this.Value = obj.CountCapital(this.Word)
  }
}
