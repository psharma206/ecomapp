import { ModalComponent } from './modal.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private matDialog: MatDialog) { }

  open= () =>{
      this.matDialog.open(ModalComponent)
  }
}
