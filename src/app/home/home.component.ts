import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  itemCount: number = 0;
  btnText: string = "Add a to do item";
  goalText: string = "";
  goals = [];
  constructor() {}

  ngOnInit() {
    this.itemCount = this.goals.length;
  }
  addItem() {
    if (this.goalText.trim().length > 0) {
      this.goals.push(this.goalText.trim());
    }
    this.itemCount = this.goals.length;
    this.goalText = ""; //reset goalText to empty
  }

  removeItem(index) {
    this.goals.splice(index, 1);
    this.itemCount = this.goals.length;
  }
}
