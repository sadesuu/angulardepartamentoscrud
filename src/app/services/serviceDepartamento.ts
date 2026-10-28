import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departamento } from '../models/departamento';
import { environment } from '../../environments/environment.development';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ServiceDepartamento {
  url = environment.apiDepartamentos;
  constructor(private _http: HttpClient) {}

  async getDepartamentosAsync(): Promise<Departamento[]> {
    let req = 'api/departamentos';
    return firstValueFrom(this._http.get<Departamento[]>(this.url + req));
  }

  async createDepartamentAsync(departamento: Departamento): Promise<any>{
    
    let json = JSON.stringify(departamento)

    let header = new HttpHeaders()
//incluimos la key de content-type
    header = header.set("content-type", "application/json")
    let req = 'api/departamentos'
    return firstValueFrom(this._http.post(this.url + req, json,{headers:header}));

  } 
}
