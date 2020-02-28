import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { StoreModule} from '@ngrx/store'
import { StoreDevtoolsModule} from '@ngrx/store-devtools'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './modal/modal.component';
import { CarComponent } from './car/car.component';
import { carsReducer } from './redux/cars.reducer'
import { MatListModule} from '@angular/material/list';
import { MatDialogModule} from '@angular/material/dialog';
import { environment} from '../environments/environment.prod';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatListModule,
    MatDialogModule,
    StoreModule.forRoot({carPage: carsReducer}),
    environment.production? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
