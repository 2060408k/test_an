import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  innerHeight: number;
  visible: String = "details";
  
  constructor() { 
    this.innerHeight = (window.screen.height);
    console.log(this.innerHeight);
  }

  //on click functions
  toogleMode(): void 
  {
    switch (this.visible) {
      case "editor":
        this.setVisible("main");
        break;
      
      case "main":
        this.setVisible("details");
        break;

      case "details":
        this.setVisible("editor");
        break;

      default:
        break;
    }
  }

  //getters & setters
  getVisible()
  {
    return this.visible;
  }

  setVisible(visible:String)
  {
    return this.visible=visible;
  }

}
