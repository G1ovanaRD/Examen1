import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Show } from '../../interfaces/show.interface';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-show-card',
  standalone: true,
  imports: [NgIf,NgClass],
  templateUrl: './show-card.component.html',
  styleUrl: './show-card.component.css'
})
export class ShowCardComponent {

  //compoentne hijo envia informacion al componente padre
  @Output() //deleteCard emisor informacion, <que tipo de evento se va a comnicar ne el evento>
  public deleteCard: EventEmitter<string>=new EventEmitter();

  //compartir show al otro form
  @Output()
  public editCard: EventEmitter<Show> = new EventEmitter();

  //componente padre esta enviando la informacion de la lista a componente hijo
  @Input()
  public show : Show ={
    description:"",
    episodes:0,
    genre:"",
    image:"",
    likes:[],
    name:"",
    year:0
  };

  public isSelect:boolean=false;

  public changeSelected():void{
  this.isSelect =!this.isSelect;

  }

  public onDeleteCard(){
    //console.log("Evento desde el hijo");
    this.deleteCard.emit(this.show.name);
  }

  public onEditCard(): void {
    this.editCard.emit(this.show); 
  }

}
