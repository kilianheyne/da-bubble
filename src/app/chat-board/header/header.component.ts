import { Component } from '@angular/core';
import { ChevronDown, LucideAngularModule, SearchIcon } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly SearchIcon = SearchIcon;
  readonly ChevronDownIcon = ChevronDown;
}
