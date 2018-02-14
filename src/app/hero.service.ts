import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero } from './hero';
import { MessageService } from './message.service';


@Injectable()
export class HeroService {
	
  	constructor(
  		private http: HttpClient,
  		private messageService: MessageService
  	) { }

  	private log

	getHeroes(): Observable<Hero[]> {
		this.messageService.add('HeroService: fetched heroes');
		return of(HEROES);
	}

	getHero(id: number): Observable<Hero> {
  		this.messageService.add(`HeroService: fetched hero id=${id}`);
  		return of(HEROES.find(hero => hero.id === id));
	}
}
