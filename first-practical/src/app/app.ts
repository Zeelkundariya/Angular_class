import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import {Signup} from './signup/signup'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [Login, Signup, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name: string = "Zeel kundariya"

}  