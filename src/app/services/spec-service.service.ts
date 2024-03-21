import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecServiceService {
  static newSpec = [
    {_libelle:"DEV APP",_idSpec:1}, 
    {_libelle:"ING RESEAUX",_idSpec:2}, 
    {_libelle:"INTEGRATEUR",_idSpec:3}, 
    {_libelle:"CHEF DE PROJET",_idSpec:4}, 
    {_libelle:"INFOGRAPHISTE",_idSpec:5}, 
    {_libelle:"UX DESIGNER",_idSpec:6}, 
    {_libelle:"DEVELOPPEUR MOBILE",_idSpec:7}

  ];

  constructor() { }
}
