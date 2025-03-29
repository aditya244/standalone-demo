import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  template: `
    <div *ngFor="let user of users" [appHighlight]="user.active">
      {{ user | formatName }}
    </div>
  `,
  styleUrls: [],
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private readonly userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      console.log(data);
      this.users = data;
    });
  }
}
