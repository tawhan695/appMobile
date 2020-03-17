import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-chart-type-bin',
  templateUrl: './chart-type-bin.page.html',
  styleUrls: ['./chart-type-bin.page.scss'],
})
export class ChartTypeBinPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  closeModal(){
    this.router.navigate(['report-bin']);
  }

  public barChartOptions: ChartOptions = {
    legend:{
      display:false,
      position:'right',
  },
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{
      ticks: {
        max: 100,
        min: 0,
        stepSize: 20
      }
    }] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['ขวดพลาสติก', 'ขวดแก้ว', 'กระป๋อง', 'ขยะทั่วไป'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: [90, 13, 42, 22], label: 'ปริมาณขยะ', backgroundColor: ['grey','green','red','yellow']}
  ];

  // constructor() { }

  // ngOnInit() {
  // }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  // public randomize(): void {
  //   // Only Change 3 values
  //   const data = [
  //     Math.round(Math.random() * 100),
  //     59,
  //     80,
  //     (Math.random() * 100),
  //     56,
  //     (Math.random() * 100),
  //     40];
  //   this.barChartData[0].data = data;
  // }

}
