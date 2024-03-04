import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2 class="center"> Modification de {{poke?.name}}<h2>
      <p *ngIf="poke">
        <img [src]='poke.picture'>
      </p>
      <app-pokemon-form *ngIf="poke" [poke]="poke"></app-pokemon-form>
  `,
  styles: ``
})
export class EditPokemonComponent implements OnInit {
  poke: Pokemon| undefined;

  constructor(
    private pokeServ: PokemonService,
    private route: ActivatedRoute
  ) {
    
  }

  ngOnInit() {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokeServ.getPokemonById(+pokemonId)
      .subscribe(poke => this.poke = poke);
    } else {
      this.poke = undefined
    }
  }

}
