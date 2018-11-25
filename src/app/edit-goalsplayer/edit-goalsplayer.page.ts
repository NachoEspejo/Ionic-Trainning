import { Component, OnInit } from '@angular/core';
import { Player } from '../interfaces/player';
import { PlayerService } from '../services/player.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-goalsplayer.page.html',
  styleUrls: ['./edit-goalsplayer.page.scss'],
})
export class EditGoalsPlayerPage implements OnInit {

  Player: Player;
  edit = false;
  private GoalKeeper = false;
  private PlayerField = false;
  private Staff = false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private playerService: PlayerService,
    private navController: NavController) {

    this.Player = {
      id: this.playerService.playerCounter,
      nombre: '',
      descripcion: '',
      category: 0,
      goals: 0,
      faltas: 0,
      pj: 0
    };
  }

  ngOnInit() {

    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.edit = true;
      this.Player = this.playerService.getPlayerById(+id);
    }
  }

  savePlayer(p: Player) {
    
    if (this.edit) {
      this.playerService.savePlayer(this.Player).then(() => this.navController.goBack(true),
        (error) => console.error('Error al guardar: ' + error)
      );
    } else {
      this.playerService.newPlayer(this.Player).then(() => this.navController.goBack(true),
        (error) => console.error('Error al guardar: ' + error)
      );
    }
  }

  goalsPlus(p: Player){
    this.Player.goals++
  }
  goalsLess(p: Player){
    if(this.Player.goals > 0){
      this.Player.goals--
    }
  }
  faltasPlus(p: Player){
    this.Player.faltas++
  }
  faltasLess(p: Player){
    if(this.Player.faltas > 0){
      this.Player.faltas--
    }
  }
  pjPlus(p: Player){
    this.Player.pj++
  }
  pjLess(p: Player){
    if(this.Player.pj > 0){
      this.Player.pj--
    }
  }

}
