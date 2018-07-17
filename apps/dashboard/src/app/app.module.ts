import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { LayoutModule } from '@glass/layout';
import { ContainerModule} from '@glass/container';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    LayoutModule, 
    ContainerModule,
    NxModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
