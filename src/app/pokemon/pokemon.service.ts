import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {}
  private url: string = 'api/pokemons';
  private httpOptions = {
    headers: new  HttpHeaders({'Content-Type': 'application/json'})
  };

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.url).pipe(
      tap((pokemonList) => this.log(pokemonList)),
      catchError((error) => this.handleError(error, []))
    );
  }

  getPokemonById(Id: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(this.url + '/'+ Id).pipe(
      tap((pokemon) => this.log(pokemon)),
      catchError((error) => this.handleError(error, undefined))
    );
  }

  updatePokemon(pokemon: Pokemon): Observable<null> {
    return this.http.put(this.url, pokemon, this.httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    );

  }

  savePokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>(this.url, pokemon, this.httpOptions).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    )
  }

  deletePokemonById(Id: number): Observable<null> {
    return this.http.delete(this.url + '/' + Id).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleError(error, null))
    )
  }

  private log(response: any) {
    console.table(response)
  }

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }

  getPokemonTypeList(): string[] {
    return ['Acier','Combat','Dragon','Eau','Electrick','Fée',
    'Feu','Glace','Insecte','Normal','Plante','Poison','Psy',
    'Roche','Sol','Spectre','Ténèbres', 'Vol']
  }
}
