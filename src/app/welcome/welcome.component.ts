import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent {
  public pageTitle = "Welcome";

  public constructor(private titleService: Title) {
    this.titleService.setTitle(`${this.pageTitle} — Claim tax benefits`);
  }
}
