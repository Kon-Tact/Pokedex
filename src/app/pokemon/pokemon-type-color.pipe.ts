import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor'
})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(type: String): string {
    let color: string;

    switch (type) {
      case 'Acier':
        //color = '#B7B7CE';
        color = '';
      break;
      case 'Combat':
        //color = '#C22E28';
        color = 'deep-orange';
      break;
      case 'Dragon':
        //color = '#6F35FC';
        color = 'deep-purple accent-4';
      break;
      case 'Eau':
        //color = '#6390F0';
        color = 'blue lighten-1';
      break;
      case 'Electrick':
        //color = '#F7D02C';
        color = 'lime accent-1'
      break;
      case 'Fée':
        //color = '#D685AD';
        color = 'pink lighten-4';
      break;
      case 'Feu':
        //color = '#EE8130';
        color = 'red lighten-1';
      break;
      case 'Glace':
        //color = '#96D9D6';
        color = 'cyan lighten-3'
      break;
      case 'Insecte':
        //color = '#A6B91A';
        color = 'brown lighten-1';
      break;
      case 'Normal':
        //color = '#A8A77A';
        color = 'grey lighten-1';  
      break;
      case 'Plante':
        //color = '#7AC74C';
        color = 'green lighten-1';
      break;
      case 'Poison':
        //color = '#A33EA1';
        color = 'deep-purple accent-1';
      break;
      case 'Psy':
        //color = '#F95587';
        color = 'deep-purple darken-2';
      break;
      case 'Roche':
        //color = '#B6A136';
        color = 'lime-darken-3';
      break;
      case 'Sol':
        //color = '#E2BF65';
        color = 'orange accent-1'
      break;
      case 'Spectre':
        //color = '#735797';
        color = 'purple darken-3';
      break;
      case 'Ténèbres':
        //color = '#705746';
        color = 'brown';
      break;
      case 'Vol':
        //color = '#A98FF3';
        color = 'blue lighten-3';
      break;
      default:
        //color = '#A8A77A';
        color = 'grey';
      break;
    }

    return 'chip ' + color;
  }

}
