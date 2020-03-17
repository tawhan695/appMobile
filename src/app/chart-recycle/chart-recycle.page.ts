import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { sum } from 'lodash';


@Component({
  selector: 'app-chart-recycle',
  templateUrl: './chart-recycle.page.html',
  styleUrls: ['./chart-recycle.page.scss'],
})
export class ChartRecyclePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  closeModal(){
    this.router.navigate(['report-bin']);
  }
//----------------------Pie Chart------------------------//

public pieChartOptions: ChartOptions = {
  responsive: true,
  legend: {
    position: 'top',
  },
  plugins: {
    datalabels: {
      formatter: (value, ctx) => {            
        let dataArr = ctx.chart.data.datasets[0].data;
        let total = sum(dataArr);     // sum from lodash        
        let percentage = (value * 100 / total).toFixed(2) + "%";
        return percentage;
      },
      color: 'black',
    }
  }
};
public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], ['Mail Sales'] , 'test'];
public pieChartData: number[] = [300, 500, 100, 400];
public pieChartType: ChartType = 'pie';
public pieChartLegend = true;
public pieChartPlugins = [pluginDataLabels];
public pieChartColors = [
  {
    backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)', 'rgba(0,255,0,0.3)'],
  },
];

// constructor() { }

// ngOnInit() {
// }

// events
public chartClicked2({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

public chartHovered2({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}


//----------------------Pie Chart------------------------//


//----------------------Pie Chart------------------------//

public pieChartOptions2: ChartOptions = {
  responsive: true,
  legend: {
    position: 'top',
  },
  plugins: {
    // datalabels: {
    //   formatter: (value, ctx) => {
    //     const label = ctx.chart.data.labels[ctx.dataIndex];
    //     return label;
    //   },
    // },
    labels: {
      render: 'value',
      fontSize: 14,
      fontStyle: 'bold',
      fontColor: '#000',
      fontFamily: '"Lucida Console", Monaco, monospace'
    }
  }
};
public pieChartLabels2: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
public pieChartData2: number[] = [300, 500, 100];
public pieChartType2: ChartType = 'pie';
public pieChartLegend2 = true;
public pieChartPlugins2 = [pluginDataLabels];
public pieChartColors2 = [
  {
    backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
  },
];

// constructor() { }

// ngOnInit() {
// }

// events
public chartClicked3({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

public chartHovered3({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}


//----------------------Pie Chart------------------------//

  //----------------------Bar Chart------------------------//
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

  //----------------------Bar Chart------------------------//


  

}
