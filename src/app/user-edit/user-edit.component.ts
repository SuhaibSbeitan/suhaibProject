import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;
  constructor(
  private activatedRoute: ActivatedRoute,
  private apiService: ApiService
  ) { }
  ngOnInit(): void {
  const id = +this.activatedRoute.snapshot.params.id;
  this.user = this.apiService.getUserById(id);
  }
  save(form: NgForm) {
  form.value.id = this.user.id;
  this.apiService.updateUser(form.value);
  alert('changes saved !!');
  }
 }
