import { Component,OnInit } from '@angular/core';
import { EtudiantServiceService } from '../../services/etudiant-service.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css'
})
export class EtudiantComponent {
  etudiants = EtudiantServiceService.newEtudiant;




}
