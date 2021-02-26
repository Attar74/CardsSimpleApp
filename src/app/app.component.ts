import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Movies = [
    {
      title: "500 Days of Summer",
      subTitle: "@Romance/Drama", 
      movieImg: "assets/500daysofsummer.jpg", 
      desc: "Tom revisits the approximate one year he shared with Summer, the girl he thought he could spend the rest of his life with. She, on the other hand, does not believe in relationships or boyfriends." 
    },
    {
      title: "Me Before You",
      subTitle: "@Romance/Drama", 
      movieImg: "assets/mebeforeyou.jpg", 
      desc: "After becoming unemployed, Louisa Clark is forced to accept one which requires her to take care of Will Traynor, a paralysed man. The two of them soon bond with each other." 
    },
    // {
    //   title: "The Fault in Our Stars",
    //   subTitle: "@Romance/Drama", 
    //   movieImg: "assets/thefaultinourstars.jpg", 
    //   desc: "Two cancer-afflicted teenagers Hazel and Augustus meet at a cancer support group. The two of them embark on a journey to visit a reclusive author in Amsterdam." 
    // },
    {
      title: "The Notebook",
      subTitle: "@Romance/Drama", 
      movieImg: "assets/thenotebook.jpg", 
      desc: "Duke reads the story of Allie and Noah, two lovers who were separated by fate, to Ms Hamilton, an old woman who suffers from dementia, on a daily basis out of his notebook." 
    }
  ]
}

