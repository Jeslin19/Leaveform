import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeaveformComponent } from './leaveform/leaveform.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LeaveformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'leaveform';
}
