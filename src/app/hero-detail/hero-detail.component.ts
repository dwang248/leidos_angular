import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;

  // Activated Route holds info about the route to this instance of the component
  // HeroService gets hero data from remote server
  // Location allows for interaction with browser
  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) { }

  ngOnInit(): void {
    this.getHero();
  }

  // route.snapshote is a static image of the route info
  // paramMap is a dictionary of route param values
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  // navigates backward one step in the browser's history stack
  goBack(): void {
    this.location.back();
  }

}
