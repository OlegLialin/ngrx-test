import {Component, OnInit, Inject} from '@angular/core'
import {Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {Cars} from './car.model'
import {AppState} from './redux/app.state'
import {MatDialog} from '@angular/material/dialog';
import {ModalComponent} from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public carState: Observable<Cars>

  constructor(private store: Store<AppState>, public dialog: MatDialog) {}

  ngOnInit() {
    this.carState = this.store.select('carPage')
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}
