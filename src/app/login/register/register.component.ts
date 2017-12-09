import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  avatars: string[];
  constructor() { }

  ngOnInit() {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    this.avatars = nums.map(i => `touxiang${i}`);
  }

}
