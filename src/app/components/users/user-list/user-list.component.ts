import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {

  users?: IUser[] = [];

  constructor(private userService: UserService){}


  ngOnInit(): void {
    this.userService.getUsers().subscribe(users=>{
      console.log(users);
      this.users = users;
    })
  }
}
