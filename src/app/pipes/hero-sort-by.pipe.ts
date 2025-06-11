import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroSortBy',
})
export class HeroSortByPipe implements PipeTransform {

  transform(value: Hero[], sortBy: keyof Hero | null): Hero[] {
    console.log(sortBy);
    if(!sortBy) return value;

    const sorted = [...value];

    switch (sortBy) {
      case 'name':
        return sorted.sort((a, b)=>a.name.localeCompare(b.name))
      
      case 'canFly':
        return sorted.sort((a, b)=> (a.canFly? 1: -1) - (b.canFly? 1: -1))

      case 'color':
        return sorted.sort((a, b)=>a.color - b.color);
      
      case 'color':
        return sorted.sort((a, b)=>a.creator - b.creator);
    
      default:
        return value;
        break;
    }
    return value.slice(0,10);
  }

}
