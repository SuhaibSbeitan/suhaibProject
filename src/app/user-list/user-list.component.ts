import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';
import { User } from '../user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(
    private apiService: ApiService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.users = this.apiService.getAllUsers();
  }

  onChangesValues(value: string) {
    if(value) {
      const result = this.users.filter(user =>
      user.name.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) !== -1);
      this.users = result;
    }
    else {
      this.users = this.apiService.getAllUsers();
    }
  }


  editUser(id: number) {
    this.router.navigate(['./edit', id]);
  }

  deleteUser(id: number) {
    this.apiService.deleteUser(id);
  }

  viewUser(id: number) {
    this.router.navigate(['./view', id]);
  }

 

}
