import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceDepartamento } from '../../services/serviceDepartamento';
import { Departamento } from '../../models/departamento';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-component',
  standalone: false,
  styleUrl: './create-component.css',
  templateUrl: './create-component.html',
})
export class CreateComponent {
  public mensaje!: string
  @ViewChild('cajaid') cajaId!: ElementRef
  @ViewChild('cajaname') cajaNombre!: ElementRef
  @ViewChild('cajalocalidad') cajaLocalidad!: ElementRef

  constructor(
    private _service :ServiceDepartamento,
    private _cdr : ChangeDetectorRef,
    private _router: Router
  ){}

  async insertDepartamento():Promise<any>{
    let id = parseInt(this.cajaId.nativeElement.value)
    let nombre = this.cajaNombre.nativeElement.value
    let localidad = this.cajaLocalidad.nativeElement.value
    let dept = new Departamento(id,nombre,localidad)
    let res = await this._service.createDepartamentAsync(dept)
    this.mensaje = "Departamento insertado"
    this._router.navigate(["/"])
    
  }

}
