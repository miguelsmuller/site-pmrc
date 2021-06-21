import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public menuShow = false;

  toggleMenu(): void {
    this.menuShow = !this.menuShow;
    console.log(this.menuShow);
  }
}
