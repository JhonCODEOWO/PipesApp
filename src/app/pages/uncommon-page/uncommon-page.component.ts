import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { I18nSelectPipe } from '@angular/common';

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
  imports: [CardComponent, I18nSelectPipe],
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
}
