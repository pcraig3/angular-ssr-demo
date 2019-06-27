import { Component, Input } from "@angular/core";

@Component({
  selector: "app-forms-button",
  templateUrl: "./forms-button.component.html",
  styleUrls: ["./forms-button.component.css"]
})
export class FormsButtonComponent {
  @Input() public text: string = "Submit";
}
