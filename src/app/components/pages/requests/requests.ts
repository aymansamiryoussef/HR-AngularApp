import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-requests',
  imports: [RouterModule, RouterLink],
  templateUrl: './requests.html',
  styleUrl: './requests.css',
})
export class Requests {
  constructor(private router: Router) {}
}
