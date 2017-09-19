import { Component, Input } from "@angular/core";
import { GridSystemService } from '../../services/gridSystem.service'

@Component({
    selector: 'use-field',
    templateUrl: './field.Component.html',
})
export class FieldComponent {

    @Input() type: string
    @Input() label: string
    @Input() name: string
    @Input() ph: string
    @Input() grid: string
    @Input() mod: any

    //Injeção de dependencia do gridSystem
    constructor(public gridSystem: GridSystemService){}

    //Ao iniciar o componenteo input grid recebe os valores que foram passados pra ele no html e passa pra função q gera o col css
    ngOnInit() {
        this.grid = this.gridSystem.toCssClasses(this.grid)
    }
}