import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPageComponent { 
  nameLower = signal('jonathan');
  nameUpper = signal('JONATHAN');
  fullName = signal('JoNaThan JuAreZ');

  customDate = signal(new Date());

  //Make an effect using Interval where it gets a new value each 1000ms in cleanup that interval is deleted
  tickingDateEffect = effect((onCleanup)=> {
    const interval = setInterval(()=>{
      this.customDate.set(new Date())
    }, 1000)

    onCleanup(()=> {
      clearInterval(interval);
    })
  })
}
