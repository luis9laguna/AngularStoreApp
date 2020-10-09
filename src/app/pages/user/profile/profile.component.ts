import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public editar: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  setEditar(){
    this.editar = true;
  }

  unsetEditar(){
    this.editar = false;
  }


}
