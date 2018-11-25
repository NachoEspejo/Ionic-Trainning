import { Component, OnInit } from '@angular/core';
import { Player } from '../interfaces/player';
import { PlayerService } from '../services/player.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.page.html',
  styleUrls: ['./edit-player.page.scss'],
})
export class EditPlayerPage implements OnInit {

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

    switch (this.Player.category) {
      case 1:
        this.GoalKeeper = true;
        this.PlayerField = false;
        this.Staff = false;
        break;
      case 2:
        this.GoalKeeper = false;
        this.PlayerField = true;
        this.Staff = false;
        break;
      case 3:
        this.GoalKeeper = false;
        this.PlayerField = false;
        this.Staff = true;
        break;
      default:
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


  setGoalKeeper(){
    this.GoalKeeper = true;
    this.PlayerField = false;
    this.Staff = false;
    this.Player.category = 1;
  }

  setPlayerField(){
    this.GoalKeeper = false;
    this.PlayerField = true;
    this.Staff = false;
    this.Player.category = 2;
  }


  setStaff(){
    this.GoalKeeper = false;
    this.PlayerField = false;
    this.Staff = true;
    this.Player.category = 3;
  }
}
