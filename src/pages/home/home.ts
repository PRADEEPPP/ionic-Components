import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SlidesComponent } from "../../components/slides/slides";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  slideContent: Array<{ content: string; }>;
  constructor(public navCtrl: NavController) {
  	this.slideContent = [
      { content: "Content home page 1"},
      { content: "Content home page 2"},
      { content: "Content home page 3"}
    ];
  }

}
