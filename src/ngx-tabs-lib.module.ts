import { NgModule } from '@angular/core';
import { TabsService } from './tabs.service';
@NgModule({
})
export class NgxTabsLibModule {
  static forRoot() {
    return {
      ngModule: NgxTabsLibModule,
      providers: [TabsService]
    }
  }
}