import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-chat-board',
  imports: [HeaderComponent],
  templateUrl: './chat-board.component.html',
  styleUrl: './chat-board.component.scss'
})
export class ChatBoardComponent {

}
