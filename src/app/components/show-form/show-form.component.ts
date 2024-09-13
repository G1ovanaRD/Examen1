import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Show } from '../../interfaces/show.interface';

@Component({
  selector: 'app-show-form',
  standalone: true,
  imports: [NgIf,FormsModule,NgFor],
  templateUrl: './show-form.component.html',
  styleUrl: './show-form.component.css'
})


export class ShowFormComponent {

  //conectar la creacion para que cuando se cree esto,se le envie al padre
@Output()
public createElement : EventEmitter<Show>=new EventEmitter();

@Input()
public show?: Show;

@Input()
public isEdit:boolean=false;
//recibir el show 

@Output() 
public updateElement:EventEmitter<Show>=new EventEmitter();

public onFormSubmit(form:NgForm):void{//el metodo recibe el formulario 

  if (form.valid) {
    const updatedShow: Show = {
      description: form.value.description,
      episodes: 0,
      genre: "",
      image: form.value.image,
      likes: [],
      name: form.value.name,
      year: 0
    };

    if (this.isEdit) {
      this.updateElement.emit(updatedShow);
    } else {
      this.createElement.emit(updatedShow);
    }

    form.resetForm();
  } else {
    console.log("Faltan datos");
  }
    }
}
