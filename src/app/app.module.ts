import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CoreModule } from './core/core.module';
import { AppRoutingModule }  from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ThousandSuffixesPipe } from './thousand-suff.pipe';



@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [
    CoreModule,

  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot(),
    CoreModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
