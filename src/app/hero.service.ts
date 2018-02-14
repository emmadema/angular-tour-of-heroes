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

  	private log(message: string) {
  		this.messageService.add('Hero Service: ' + message);
  	}

  	private heroesUrl = 'api/heroes';

	getHeroes(): Observable<Hero[]> {
		this.messageService.add('HeroService: fetched heroes');
		return this.http.get<Hero[]>(this.heroesUrl)
	}

	getHero(id: number): Observable<Hero> {
  		this.messageService.add(`HeroService: fetched hero id=${id}`);
  		return of(HEROES.find(hero => hero.id === id));
	}
}
