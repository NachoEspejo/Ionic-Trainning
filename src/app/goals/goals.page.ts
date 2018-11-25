import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { Player } from '../interfaces/player';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'goals.page.html',
  styleUrls: ['goals.page.scss'],
})
export class GoalsPage implements OnInit {

  Players: Player[] = [];

  constructor(
    private playerService: PlayerService,
    private alertController: AlertController,
    private navController: NavController) { }
z
  ngOnInit() {

  }

  ionViewWillEnter() {
    this.playerService.getPlayers().then(data => this.Players = data);
  }


  editGoals(id: number) {
    this.navController.navigateForward('/editgoals/' + id)
  }
}
