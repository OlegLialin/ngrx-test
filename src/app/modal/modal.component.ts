import {Component, Inject} from '@angular/core'
import {Store} from '@ngrx/store'
import * as moment from 'moment'
import {AppState} from '../redux/app.state'
import {Car, Cars} from '../car.model'
import {AddCar} from '../redux/cars.action'
import {Observable} from 'rxjs'
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  public carState: Observable<Cars>

  private id: number = 2

  carName: string = ''
  carModel: string = ''

  constructor(private store: Store<AppState>, public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.carState = this.store.select('carPage')
  }

  onAdd() {
    if (this.carModel === '' || this.carName === '') return

    this.id = ++this.id

    const car = new Car(
      this.carName,
      moment().format('DD.MM.YY'),
      this.carModel,
      false,
      this.id
    )
    console.log(car)
    this.store.dispatch(new AddCar(car))

    this.carModel = ''
    this.carName = ''
  }
}
