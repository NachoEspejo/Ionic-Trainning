import { Injectable } from '@angular/core';
import { Player } from '../interfaces/player';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  Players: Player[] = [];
  playerCounter = 0;
  GoalKeeper: Player[] = [];
  PlayerField: Player[] = [];
  Staff: Player[] = [];
  orderAsc = true;

  constructor(private storage: Storage) {

  }

  getPlayers(): Promise<Player[]> {
    this.storage.get('this.playerCounter').then(data => { if (data) { this.playerCounter = data } });
    return this.storage.get('Players').then(
      data => {
        if (data) {this.Staff = data.filter(p => p.category === 3),
          this.PlayerField = data.filter(p => p.category === 2),
          this.GoalKeeper = data.filter(p => p.category === 1)
          if(this.orderAsc) {
            this.Players = this.GoalKeeper.concat(this.PlayerField).concat(this.Staff);
          } else {
            this.Players = this.Staff.concat(this.PlayerField).concat(this.GoalKeeper);
          }
          return this.Players;
        }
      });
  }

  savePlayer(p): Promise<Player[]> { // devuelve una promesa
    this.Players[this.Players.findIndex(Player => Player.id === p.id)] = p;
    return this.storage.set('Players', this.Players);
  }

  newPlayer(p): Promise<Player[]> {
    this.Players.push(p);
    this.playerCounter++;
    return this.storage.set('Players', this.Players).then(() =>
      this.storage.set('playerCounter', this.playerCounter)
    ); // devolver promesa
  }

  deletePlayer(id: number): Promise<Player[]> {
    this.Players = this.Players.filter(p => p.id !== id);
    return this.storage.set('Players', this.Players);
  }

  getPlayerById(id: number): Player {
    return this.Players.find(p => p.id === id);
  }

}