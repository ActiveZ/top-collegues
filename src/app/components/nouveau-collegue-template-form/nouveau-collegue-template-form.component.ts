import { Component, OnInit } from '@angular/core';
import { Collegue } from 'src/app/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.scss'],
})
export class NouveauCollegueTemplateFormComponent implements OnInit {
  newCollegue: Partial<Collegue> = {}

  constructor(private dataSrv:DataService) {}

  ngOnInit(): void {}

  submit() {
    this.dataSrv.postCollegue(this.newCollegue)
    .subscribe(data=>console.log(data));
  }
}
