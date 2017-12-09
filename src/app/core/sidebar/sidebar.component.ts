import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  today = 'icon-ri';
  constructor() { }

  ngOnInit() {
    this.today = 'icon-rili' + new Date().getDate();
    console.log(this.today);
  }

}
