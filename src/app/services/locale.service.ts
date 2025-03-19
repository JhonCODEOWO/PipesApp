import { Injectable, signal } from '@angular/core';

export type availableLocale = 'es'| 'fr'| 'en';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  private currentLocale = signal<availableLocale>('es');

  constructor(){
    //Get value from localstorage if it doesn't exists use es instead
    this.currentLocale.set(
      localStorage.getItem('locale') as availableLocale ?? 'es'
    );
  }

  get getLocale(){
    return this.currentLocale();
  }

  changeLocale(locale: availableLocale){
    //Save the language in localstorage
    localStorage.setItem('locale', locale);
    //Set te value to the signal 
    this.currentLocale.set(locale);
    //Reload page to get the new value in localstorage
    window.location.reload();
  }
}
