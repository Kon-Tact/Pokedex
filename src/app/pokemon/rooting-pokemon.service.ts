import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RootingPokemonService {

  constructor(private router: Router) { }

  goToList() {
    this.router.navigate(['/pokemons']);
  }

  goToDetails(Id: number) {
    this.router.navigate(['/pokemon', Id])
  }

  goToUpdate(Id: number) {
    this.router.navigate(['/edit/pokemon/' + Id]);
  }

  goToAdd() {
    this.router.navigate(['add/pokemon']);
  }
}
