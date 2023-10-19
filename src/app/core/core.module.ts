import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[ApiService]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only',
      );
    }
  }
}
