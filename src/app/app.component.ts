import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CpipePipe } from './pipes/cpipe.pipe';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CpipePipe],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-assignment';
  
  txtinterpolation = "Data binding examples";
  
  clickCount: number = 0;

  onButtonClick(): void {
    this.clickCount++;
  }


  bidType: string = 'Open Bid'; // Two-way data binding variable

  changeBidType(newType: string) {
    this.bidType = newType;
  }

  paragraph: string = 'Don’t worry so much about how long you’ve been doing it. Make today count. Focus on what you can do right now. That advice seemed to work well for Muhammed Ali. It can serve you well too, by keeping you in motion and not worrying about the past or future, of which you have no control over.';
  searchText: string = ''; 
}
