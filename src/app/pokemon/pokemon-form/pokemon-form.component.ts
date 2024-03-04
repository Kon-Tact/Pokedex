import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: 'pokemon-form.component.html',
  styleUrls: ['pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit{

  //Ce champ indique qu'il est nécessaire de passer un pokemon en paramètre
  @Input() poke: Pokemon;

  //Liste des types
  Types: String[];

  //Variable de vérification de cas pour le formulaire
  isAdd: boolean;

  constructor(
    //Ici on injecte nos services

    //Service de gestion de pokemons
    private pokeService: PokemonService,

    //Service de gestion de rooting
    private router: Router) {}

  //Actions a l'ouverture de la page
  ngOnInit() {
    //On récupère les types du pokemon 
    this.Types = this.pokeService.getPokemonTypeList();

    //On vérifie si c'est l'url d'ajout de pokemon
    this.isAdd = this.router.url.includes('add')
  }

  //Pré-cochage des types initiaux du pokemon
  hasType(type: String): boolean {
    return this.poke.types.includes(type);
  }

  //Mise à jour du type lors du check de l'utilisateur
  selectType($event: Event, type: String) {

    //On vérifie si la case a été cochée ou décochée
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    //Si elle a été cochée on rajoute le type
    if (isChecked) {
      this.poke.types.push(type);
    }

    //Si elle a été décochée on le retire 
    else {
      const index = this.poke.types.indexOf(type);
      this.poke.types.splice(index, 1);
    }
  }

  //Règle de validation : Types du pokemon
  isTypesValid(type : String): boolean {
    
    //S'il ne reste qu'un seul type au pokemon
    //On désactive la case
    if(this.poke.types.length == 1 && this.hasType(type)) {
      return false;
    }

    //Si trois types sont sélectionnés
    //On désactive les autres cases
    if(this.poke.types.length > 2 && !this.hasType(type)) {
      return false;
    }

    //Si toutes les règles sont respectés
    //Toutes les cases sont activées
    return true;
  }

  //Validation du formulaire
  onSubmit() {
    //Si l'url indique un cas d'ajout on lance la requête d'ajout
    //Et on navigue vers la nouvelle page de détail
    if(this.isAdd) {
      this.pokeService.savePokemon(this.poke)
      .subscribe((poke: Pokemon) => this.router.navigate(['/pokemon/'+ poke.id]))
    } 
    
    //Sinon on lance la requête de mise à jour
    //Et on navigue vers la page détail du pokemon modifié
    else {
      this.pokeService.updatePokemon(this.poke)
      .subscribe(() => this.router.navigate(['/pokemon/'+ this.poke.id]));
    }
    
  }
}
