import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photoCover: string = "";
  contentTitle: string = "";
  contentDescription: string = "";
  projectLinks: { name: string; link: string }[] = [];

  private id: string | null = "0";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      this.setValuesToComponent(this.id);
    });
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.find(article => article.id === id);

    if (result) {
      this.contentTitle = result.title;
      this.photoCover = result.photoCover;
      this.contentDescription = result.description;

      if (result.projectLinks) {
        this.projectLinks = result.projectLinks;
      }
    }
  }
}
