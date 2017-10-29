import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ANIMALES } from '../../data/data.animales'
import { Animal } from '../../interfaces/animal.interface'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  animales:Animal[] = [];
  constructor(public navCtrl: NavController) {
    this.animales = ANIMALES.splice(0);
  }
  play(animal: Animal) {
    console.log('animal', animal);
    let audio = new Audio();
    audio.src = animal.audio;
    animal.reproduciendo = true;
    if(animal.reproduciendo) {
      audio.load();
      audio.play();
      setTimeout( () => animal.reproduciendo = false, animal.duracion * 1000);
    }
  }
}
