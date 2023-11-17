import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from 'src/app/core/components/menu/menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
