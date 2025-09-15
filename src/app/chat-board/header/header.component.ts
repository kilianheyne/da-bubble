import { Component } from '@angular/core';
import { LucideAngularModule, MenuIcon, SearchIcon } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly SearchIcon = SearchIcon;
  readonly menuIcon = MenuIcon;
  menuShown: boolean = true;

  constructor() {}

  displayMenu(): void {
    this.menuShown = !this.menuShown;
  }
}
