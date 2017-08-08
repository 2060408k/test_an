import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-TimelineBox",
  templateUrl: "./TimelineBox.component.html",
  styleUrls: ["./TimelineBox.component.scss"]
})

export class TimelineBoxComponent implements OnInit {
  
  protected chapterNum = 1;

  protected RandomText = "Lorem Ipsum soti";

  constructor() { 

  }

  ngOnInit() {

  }
}
