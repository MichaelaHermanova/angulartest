import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uver',
  templateUrl: './uver.component.html',
  styleUrls: ['./uver.component.scss']
})
export class UverComponent implements OnInit {
  title = 'myApp';
  public months: string[]=[
    "2",
    "4",
    "6",
    "8",
    "10",
    "12",
    "14",
    "16",
    "18",
    "20",
    "22",
    "24",
  ];
  public month: number = 2;

  public money: number = 5000;
  constructor() { }

  public object =  {
    
  }

  public splatka: number = 0;

  ngOnInit() {
  }

  public lent(event, whatChanged): void {
    if (whatChanged === 'months')
    {
      this.month = Number(event.target.value.split(' ')[0]);
    }

    this.splatky();
  }

  public splatky(): void {
    const vyseSplatky = ((this.money * 0.05) + (this.money / this.month));
    this.object = {
      vyseUveru: this.money,
      vyseSplatky: vyseSplatky,
      celkovaSuma: (vyseSplatky * this.month),
      month: this.month,
    }
  }
}
