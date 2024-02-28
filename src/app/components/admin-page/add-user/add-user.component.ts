import { Component } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  isFormVisible: boolean = false;
  newUser: any = {};

  toggleFormVisibility() {
    this.isFormVisible = !this.isFormVisible;
    if (!this.isFormVisible) {
      this.resetForm();
    }
  }

  addUser() {
    // Add logic to handle adding a user
    console.log('Adding user:', this.newUser);
    // Reset form or close form visibility after adding user
    this.toggleFormVisibility();
  }

  cancelAddUser() {
    this.toggleFormVisibility();
  }

  private resetForm() {
    this.newUser = {};
  }
}
