import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroFiler',
})
export class HeroFilerPipe implements PipeTransform {

  transform(value: Hero[], search: string): Hero[] {
    if(!search) return value;
    const result = [...value];
    search = search.toLowerCase();
    return result.filter(hero => hero.name.toLocaleLowerCase().includes(search));
  }
}
