import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent],
  templateUrl: './uncommon-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UncommonPageComponent { }
