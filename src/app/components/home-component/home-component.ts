import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceDepartamento } from '../../services/serviceDepartamento';
import { Departamento } from '../../models/departamento';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent implements OnInit {
  public departamentos!: Array<Departamento>;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceDepartamento,
  ){}

  async ngOnInit(): Promise<void> {
    this.departamentos = await this._service.getDepartamentosAsync();
    this._cdr.detectChanges()
  }

}
