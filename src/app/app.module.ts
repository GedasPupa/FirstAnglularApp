import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConvertToSpacePipe } from './pipes/convert-to-space.pipe';
import { RouterModule } from '@angular/router';
import { ZmogeliaiComponent } from './components/zmogeliai/zmogeliai.component';
import { MokomesComponent } from './components/mokomes/mokomes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ConvertToSpacePipe,
    ZmogeliaiComponent,
    MokomesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: AppComponent },
      { path: 'zmogeliai', component: ZmogeliaiComponent },
      { path: 'mokomes', component: MokomesComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
