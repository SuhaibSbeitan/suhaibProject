import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ApiService } from '../core/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  form: FormGroup;
  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [null],
      city: [null],
      phone: [null],
      userName: [null],
      password: [null]
    });
  }

  save() {
    const user: User = this.form.value;
    user.id = this.apiService.userCount() + 1;
    this.apiService.createUser(user);
    alert('A user has been created Successfully!');
  }

}
