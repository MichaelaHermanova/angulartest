import { Component, OnInit } from '@angular/core';
import { format } from 'date-fns';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public date: string;
  constructor() { }

  ngOnInit() {
    this.formatDate();
  }

  public formatDate(): void
  {
    setInterval(() =>
    {
      this.date = format(new Date(), 'hh:mm:ss');
    }, 1000);
  }

}
