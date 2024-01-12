import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NumberService 
{
  constructor() { }

  CheckPrime(num : number) : any
  {
    for(let i = 2; i<num;i++)
    {
      if((num%i)==0)
      {
        return "Given Number is Not Prime Number";
      }
    }
    return "Given Number is Prime Number";
  }
}
