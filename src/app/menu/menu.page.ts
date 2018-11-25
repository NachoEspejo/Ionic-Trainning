import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { Player } from '../interfaces/player';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'menu.page.html',
  styleUrls: ['menu.page.scss'],
})
export class MenuPage implements OnInit {

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

  async deleteDialog(nombre: string, id: number) {

    const alert = await this.alertController.create({
      header: 'Despedir jugador',
      message: '¿Estás seguro que quieres despedir a <strong>' + nombre + '</strong>?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.playerService.deletePlayer(id).then(
              () => this.playerService.getPlayers().then(
                data => this.Players = data)
            );
          }
        }
      ]
    });

    await alert.present();
  }
  editPlayer(id: number) {
    this.navController.navigateForward('/edit/' + id)
  }

  ascendente() {
    this.playerService.orderAsc = true;
    this.playerService.getPlayers();
    this.ionViewWillEnter();
  }

  descendiente() {
    this.playerService.orderAsc = false;
    this.playerService.getPlayers();
    this.ionViewWillEnter();
  }
}
