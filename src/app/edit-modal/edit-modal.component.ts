import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {GetUserByIdService} from '../get-user-by-id.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../models/user.model';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {
  id: number;
  isEdit: boolean;
  editForm: FormGroup;
  user: User[];
  private userId: User;

  constructor(
    private getService: GetUserByIdService,
    public dialogRef: MatDialogRef<EditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.id = data.id;
    this.userId = this.getService.getUser(this.id);
    this.isEdit = false;
  }

  ngOnInit() {
    this.editForm = new FormGroup({
      id: new FormControl(this.userId.id),
      firstname: new FormControl(this.userId.firstname, [Validators.required]),
      lastname: new FormControl(this.userId.lastname, [Validators.required]),
      email: new FormControl(this.userId.email, Validators.email),
      password: new FormControl(this.userId.password, [Validators.required, Validators.minLength(6)
      ])
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  back() {
    this.dialogRef.close();
  }

  edit() {
    this.isEdit = true;
  }

  //confiramtion button
  confirmEdit() {
    this.userId = {
      id: +this.editForm.controls.id.value,
      firstname: this.editForm.controls.firstname.value,
      lastname: this.editForm.controls.lastname.value,
      email: this.editForm.controls.email.value,
      password: this.editForm.controls.password.value,
    };
    this.getService.editUser(this.userId);
    this.dialogRef.close();
    console.log('This is User id: ', this.userId);
  }
}
