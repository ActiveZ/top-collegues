import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Collegue } from 'src/app/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detail-collegue',
  templateUrl: './detail-collegue.component.html',
  styleUrls: ['./detail-collegue.component.scss'],
})
export class DetailCollegueComponent {
  collegue?: Collegue;

  constructor(private dataSrv: DataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if (id) {
        this.dataSrv.getCollegueById(id).subscribe((data) => {
          this.collegue = data;
          console.log('collegue details', this.collegue);
        });
      }
    });
  }
}
