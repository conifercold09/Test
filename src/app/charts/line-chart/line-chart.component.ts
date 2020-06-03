import { Component, OnInit } from '@angular/core';

const SAMPLE_BARCHART_DATA: any[]=[
  {data:[65,59,80,56,54,30],label:'Q3 Sales'},
  {data:[25,49,80,56,34,90], label: 'Q4 Sales'}
];

const SAMPLE_BARCHART_LABELS: string[]=
['w1','W2','W3','W4','W5','W6'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }
  public lineChartData:any[] = SAMPLE_BARCHART_DATA;
  public lineChartLabels:any[]= SAMPLE_BARCHART_LABELS;
  public lineChartType ='bar';
  public lineChartLegend =true;
  public lineChartOptions:any={
    scaleShowVerticalLines: false,
    responsive:true
  };

  ngOnInit(): void {
  }

}
