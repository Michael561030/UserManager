import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {AppService} from '../app.service';


@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.css']
})
export class DialogModalComponent {
  id: number;
  user: object;

  constructor(
    private service: AppService,
    public dialogRef: MatDialogRef<DialogModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.id = data.id;
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  confirm() {
    this.service.deleteUser(this.id);
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }
}
