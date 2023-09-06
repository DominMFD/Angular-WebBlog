import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  generateColor():string {
    const letters ='012345678ABCDEF'
    let color = '#'

    for(let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
  }
}
