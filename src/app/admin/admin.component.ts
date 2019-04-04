import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../app.service';
import {User} from '../models/user.model';
import {MatDialog, MatPaginator} from '@angular/material';
import {DialogModalComponent} from '../dialog-modal/dialog-modal.component';
import {EditModalComponent} from '../edit-modal/edit-modal.component';
import {GetUserByIdService} from '../get-user-by-id.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  users: User[];

  constructor(private service: AppService,
              private router: Router,
              public dialog: MatDialog,
              private getService: GetUserByIdService) {
  }

  ngOnInit() {
    this.users = this.service.users;
  }

  signUp(): void {
    this.router.navigate(['admin/create_user']);
  }

  openModal(id) {
    this.dialog.open(DialogModalComponent, {
      data: {
        id
      }
    });
  }

  editModal(id) {
    const dialogRef = this.dialog.open(EditModalComponent, {
      data: {
        id,
        user: this.getService.getUser(id),
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.users = this.service.users;
    });
  }
}

