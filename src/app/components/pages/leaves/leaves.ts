import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-leaves',
  imports: [CommonModule, RouterModule],
  templateUrl: './leaves.html',
  styleUrl: './leaves.css',
})
export class Leaves {}
