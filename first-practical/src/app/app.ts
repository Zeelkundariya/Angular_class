import { Component } from '@angular/core';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Login, Signup, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name: string = "Zeel kundariya";

  studentName = ["abc", "def", "ghi"];

  studentDetails = [
    {
      name: "Zeel",
      age: 19,
      city: "Vyara"
    },
    {
      name: "Rani",
      age: 19,
      city: "Idar"
    },
    {
      name: "Devanshi",
      age: 18,
      city: "Bhavnagar"
    }
  ];
}