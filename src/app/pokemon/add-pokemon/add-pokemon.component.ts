import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-add-pokemon',
  template: `
    <h2 class="center"> Ajout de pokemon<h2>
    <p>
      <app-pokemon-form *ngIf="poke" [poke]="poke"></app-pokemon-form>
    </p>
  `
})
export class AddPokemonComponent implements OnInit{
  
  poke: Pokemon;

  ngOnInit() {
    this.poke = new Pokemon();
  }

}
