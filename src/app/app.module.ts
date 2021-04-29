import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RobotComponent } from './components/UI/atoms/robot/robot.component';
import { ShelvingComponent } from './components/UI/atoms/shelving/shelving.component';
import { DataComponent } from './components/UI/atoms/data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    RobotComponent,
    ShelvingComponent,
    DataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
