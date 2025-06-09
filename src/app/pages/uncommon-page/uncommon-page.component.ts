import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe } from '@angular/common';

const client1 = {
  name: 'Alejandra',
  gender: 'female',
  age: 39,
  address: 'Ottawa, Canada'
}

const client2 = {
  name: 'Jonathan',
  gender: 'male',
  age: 22,
  address: 'Zacatlán, Puebla'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, KeyValuePipe, AsyncPipe],
  templateUrl: './uncommon-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UncommonPageComponent {
  //i18n Select
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(){
    if(this.client() === client1){
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }
  
  clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando', //Regla general para texto a mostrar
  });

  //I18nPlural
  clients = signal([
    'Maria',
    'Pedro',
    'Fernando',
    'Natalia',
    'Andrea',
    'Juan'
  ]);

  deleteClient(){
    this.clients.update(prev => prev.slice(1))
  }

  //KeyValue Pipe
  profile = {
    name: 'Jonathan',
    age: 23,
    address: 'Zacatlán',
  }

  //Async Pipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(()=> {
      //reject('Error al realizar');
      resolve('Tenemos data en la promesa');
      console.log('Promesa finalizada');
    }, 3500)
  })
}
