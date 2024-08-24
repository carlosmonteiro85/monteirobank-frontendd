import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit {

  currentRoute: string;

  constructor(private router: Router) {
    this.currentRoute = this.router.url;
  }

  ngOnInit(): void {
    this.router.navigate(['blank-depois-mudar-para-home']); // navega para a tela principal
  }

  setActive(route: string) {
    this.currentRoute = route;
  }

  isActive(route: string): boolean {
    return this.currentRoute === route;
  }

}
