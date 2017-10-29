import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ANIMALES } from '../../data/data.animales'
import { Animal } from '../../interfaces/animal.interface'
import { Refresher } from 'ionic-angular'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  animals:Animal[] = [];
  audio = new Audio();
  constructor(public navCtrl: NavController) {
    this.animals = ANIMALES.slice(0);
  }
  play(animal: Animal) {
    console.log('animal', animal);
    animal.reproduciendo = true;
    if(animal.reproduciendo) {
      this.audio.src = animal.audio;
      this.audio.load();
      this.audio.play();
      setTimeout( () => animal.reproduciendo = false, animal.duracion * 1000);
    }
  }

  pause(animal: Animal) {
    animal.reproduciendo = false;
    this.audio.pause();
  }

  deleteAnimal(id: number) {
    this.animals.splice(id, 1);
  }

  doRefresh(refresher: Refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 1000);
  }

}
