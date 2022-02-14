import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { Collegue } from 'src/app/models';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detail-collegue',
  templateUrl: './detail-collegue.component.html',
  styleUrls: ['./detail-collegue.component.scss']
})
export class DetailCollegueComponent implements OnInit {

  collegue: Collegue = {
    photo: "",
    prenom: "",
    pseudo: "",
    nom: "",
    score: 0
  }
  // collegueObs: Observable<Collegue>
  
  constructor(private dataSrv: DataService, private route: ActivatedRoute) {
    // this.collegueObs = route.paramMap.pipe(
    //   map(paramMap => paramMap.get("pseudo")),
    //   switchMap(pseudo => {
    //     if (pseudo)
    //       return dataSrv.getCollegueByPseudo(pseudo)
    //   })
    // )
  }


  ngOnInit(): void {
    this.route.paramMap
      .subscribe((params: ParamMap) => {
        const pseudo = params.get('pseudo')
        if (pseudo) {
          this.dataSrv.getCollegueByPseudo(pseudo)
            .subscribe(data => {
              this.collegue = data
            })
        }
      })

  }

}
