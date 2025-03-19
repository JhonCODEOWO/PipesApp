import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { availableLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BasicPageComponent { 
  localeService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID))
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

  changeLocal(locale: availableLocale){
    this.localeService.changeLocale(locale);
  }
}
