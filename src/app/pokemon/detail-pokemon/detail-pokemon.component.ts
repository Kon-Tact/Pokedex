import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})
export class DetailPokemonComponent implements OnInit{

  pokemonList: Pokemon[]
  poke: Pokemon|undefined;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private pokeService: PokemonService) {}

  ngOnInit(): void {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    console.log(pokemonId);
    
    if(pokemonId) {
      this.pokeService.getPokemonById(+pokemonId)
      .subscribe(poke => this.poke = poke);
    }
  }

  deletePokemon(poke: Pokemon) {
    this.pokeService.deletePokemonById(poke.id).subscribe(
      () => this.goBack()
    );
  }

  goToEdit(poke: Pokemon) {
    this.router.navigate(['/edit/pokemon/' + poke.id]);
  }

  goBack() {
    this.router.navigate(['/pokemons']);
  }
}
