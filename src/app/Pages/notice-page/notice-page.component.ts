import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-notice-page',
  templateUrl: './notice-page.component.html',
  styleUrls: ['./notice-page.component.css']
})
export class NoticePageComponent implements OnInit {

  noticeTitle:string | undefined = ""
  noticeDate:string | undefined = ""
  noticeImage:string | undefined = ""
  noticeText1:string  | undefined = ""
  noticeText2:string  | undefined = ""
  noticeText3:string  | undefined = ""
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id = value.get("id")
      )

      this.setValuesComponent(this.id)
  }

  setValuesComponent(id:string | null) {
    const result = dataFake.filter(article => article.id == id)[0]

    this.noticeDate = result.date
    this.noticeImage = result.image
    this.noticeTitle = result.title
    this.noticeText1 = result.text
    this.noticeText2 = result.text2
    this.noticeText3 = result.text3

  }

}
