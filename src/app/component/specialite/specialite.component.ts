import { Component } from '@angular/core';
import { SpecServiceService } from '../../services/spec-service.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrl: './specialite.component.css'
})
export class SpecialiteComponent {
specialites = SpecServiceService.newSpec;
}
