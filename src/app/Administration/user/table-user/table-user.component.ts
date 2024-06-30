import { Component } from '@angular/core';
import { Customer } from '../../../../domain/user';
import { userservice } from '../../../../service/userservice';

@Component({
  selector: 'app-table-user',
  templateUrl: './table-user.component.html',
  styleUrl: './table-user.component.css'
})
export class TableUserComponent {
  users!: Customer[];

    constructor(private userService: userservice) {}

    ngOnInit() {
        this.userService.getCustomersLarge().then((users) => (this.users = users));
    }
}
