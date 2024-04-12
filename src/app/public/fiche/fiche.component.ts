import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fiche',
  templateUrl: './fiche.component.html',
  styleUrls: ['./fiche.component.css']
})
export class FicheComponent implements OnInit {
  selectedType: any='';
  autreVisible: string = 'none';

  onOptionsSelected(val:Event) {
    console.dir(val);
    // this.autreVisible = (this.choix === 'Autre')?'block':'none';
  }

  constructor() { }

  ngOnInit(): void {
  }
}
