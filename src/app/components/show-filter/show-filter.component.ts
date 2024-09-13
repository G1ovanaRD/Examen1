import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-show-filter',
  standalone: true,
  imports: [],
  templateUrl: './show-filter.component.html',
  styleUrl: './show-filter.component.css'
})
export class ShowFilterComponent {
  
  @Output()
   onAlfabetic = new EventEmitter<void>();

  @Output()
  public onEnd=new EventEmitter<void>();

  //MANDADO A LLAMAR PARA QUE REALICEN LAS ACCIONES
  ordenAlfa(){
    this.onAlfabetic.emit();
  }

  ordenaFinal(){
    this.onEnd.emit();
  }

  contentCard(){
    
  }

}
