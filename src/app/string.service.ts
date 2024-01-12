import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StringService 
{

  constructor()
   { }
   
   CountCapital(name : string) : number
   {
    let Count = 0;

    for(let i = 0;i<=name.length;i++)
    {
      if((name[i]>='A') && (name[i]<='Z'))
      Count++;
    }
    return Count;
   }
}
