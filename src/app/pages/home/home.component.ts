import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  skills = ['Java', 'Spring Boot', 'MySQL', 'Docker', 'React', 'Angular', 'Node.js', 'MongoDB', 'Kubernetes', 'GraphQL'];

  pastelColors = [
    { bg: '#b3e5fc', text: '#01579b' }, // blue
    { bg: '#d1c4e9', text: '#512da8' }, // purple
    { bg: '#c8e6c9', text: '#2e7d32' }, // green
    { bg: '#ffe082', text: '#ef6c00' }, // orange
    { bg: '#f8bbd0', text: '#ad1457' }, // pink
    { bg: '#ffccbc', text: '#d84315' }, // deep orange
    { bg: '#f0f4c3', text: '#827717' }, // lime
    { bg: '#b2dfdb', text: '#00695c' }, // teal
    { bg: '#dcedc8', text: '#558b2f' }, // light green
    { bg: '#e1bee7', text: '#6a1b9a' }  // violet
  ];

  colors: { bg: string, text: string }[] = [];

  ngOnInit(): void {
    // Barajamos los colores para que no se repitan
    const shuffled = [...this.pastelColors].sort(() => 0.5 - Math.random());
    this.colors = this.skills.map((_, i) => shuffled[i % shuffled.length]);
  }
}