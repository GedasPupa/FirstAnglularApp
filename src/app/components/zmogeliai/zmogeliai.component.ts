import { Component, OnInit } from '@angular/core';
import { zmogelis } from 'src/app/models/Zmogelis';
import { ZmogeliaiService } from 'src/app/services/zmogeliai.service';

@Component({
  selector: 'app-zmogeliai',
  templateUrl: './zmogeliai.component.html',
  styleUrls: ['./zmogeliai.component.css'],
})
export class ZmogeliaiComponent {
  onFilter($event: any): void {
    let inp = $event.target.value.toLocaleLowerCase();
    this.filterData = this.zmogeliai.filter(
      (zm) => zm.vardas.toLocaleLowerCase().indexOf(inp) != -1
    );
  }
  zmogeliai: zmogelis[];
  filterData: zmogelis[];
  // I var injectinti
  // private zs: ZmogeliaiService;
  // constructor(zmogeliaiService: ZmogeliaiService) {
  //   this.zs = zmogeliaiService;
  //   this.zmogeliai = this.zs.getZmogeliai();
  //   this.filterData = this.zmogeliai;
  // }
  // II var.:
  constructor(private zmogeliaiService: ZmogeliaiService) {
    this.zmogeliai = this.zmogeliaiService.getZmogeliai();
    this.filterData = this.zmogeliai;
  }
}
