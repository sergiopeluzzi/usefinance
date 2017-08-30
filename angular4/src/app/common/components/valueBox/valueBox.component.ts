//Os componentes tipo elemento precisam importar o decorator input
import { Component, Input } from '@angular/core';

import { GridSystemService } from '../../services/gridSystem.service'

@Component({
  selector: 'use-value-box',
  templateUrl: './valueBox.component.html'
})
export class ValueBoxComponent {
  //Inputs são os atributos que serão passados na construção do elemento
  @Input() grid: string
  @Input() colorClass: string
  @Input() value: string
  @Input() text: string
  @Input() iconClass: string

  

  //Injeção de dependencia -> assim que o component ValueBox é chamado, ele instancia o gridSystem
  constructor(public gridSystem: GridSystemService){}

  ngOnInit() {
      this.grid = this.gridSystem.toCssClasses(this.grid)
  }
}
