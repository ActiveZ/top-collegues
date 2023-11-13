import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Collegue } from 'src/app/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detail-collegue',
  templateUrl: './detail-collegue.component.html',
  styleUrls: ['./detail-collegue.component.scss']
})
export class DetailCollegueComponent implements OnInit {

  collegue?: Collegue

  constructor(private dataSrv: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        const pseudo = params.get('pseudo')
        if (pseudo) {
          this.dataSrv.getCollegueByPseudo(pseudo)
            .subscribe(data => {
              this.collegue = data
              console.log("collegue details", this.collegue);
            })
        }
      })
  }
}
