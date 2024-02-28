import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: any[] = [  // You might want to create an interface for user data
  { username: 'User1', email: 'user1@example.com' },
  { username: 'User2', email: 'user2@example.com' },
  // Add more sample users as needed
];

showUpdateForm(user: any) {
  // Add logic to show the update form for a specific user
  console.log('Updating user:', user);
}

deleteUser(user: any) {
  // Add logic to delete a user
  console.log('Deleting user:', user);
  // Remove the user from the users array
  this.users = this.users.filter(u => u !== user);
}
}
