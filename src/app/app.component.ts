import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  title = "Whatsapp Contact";
  phonenumber!: number;
  goToWhatsapp() {
    window.open(`https://wa.me/+91${this.phonenumber}`);
    console.log(this.phonenumber);
  }
}