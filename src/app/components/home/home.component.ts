import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { LancamentoService } from 'src/app/service/lancamento.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  totalReceita: string = '';
  totalDespesa: string = '';

  totalReceitaAnual: string = '';
  totalDespesaAnual: string = '';

  porcentagemDespesa: string = '';
  porcentagemReceita: string = '';

  @ViewChild('salesStatisticsOverview') salesStatisticsOverviewCanvas: ElementRef<HTMLCanvasElement>;
  chart: Chart;

  constructor(private lancamentoService: LancamentoService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.getTotalDespesa();
    this.getTotalReceita();
    this.getTotalReceitaAnual();
    this.getTotalDespesaAnual();

    this.getPorcentagemDespesa();
    this.getPorcentagemReceita();
  }

  ngAfterViewInit(): void {
    this.initializeChart();
  }

  initializeChart(): void {
    const ctx = this.salesStatisticsOverviewCanvas.nativeElement.getContext('2d');
    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Total Revenue',
              data: [10, 20, 30, 40, 50, 60, 70, 30, 60, 80, 50, 90],
              borderColor: 'blue',
              backgroundColor: 'lightblue',
            },
            {
              label: 'Total Cost',
              data: [5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 85, 75],
              borderColor: 'green',
              backgroundColor: 'lightgreen',
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Sales Statistics Overview'
            }
          }
        }
      });
    }
  }

  updateChartData(period: string): void {
    let newData = {
      '1D': {
        labels: ['00:00', '06:00', '12:00', '18:00', '24:00'],
        revenueData: [10, 12, 14, 18, 16],
        costData: [5, 6, 8, 7, 6]
      },
      '5D': {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        revenueData: [100, 120, 140, 180, 160],
        costData: [50, 60, 80, 70, 60]
      },
      '1M': {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        revenueData: [300, 400, 350, 450],
        costData: [150, 200, 175, 225]
      },
      '1Y': {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        revenueData: [1200, 1500, 1800, 2000, 2200, 2500, 3000, 2700, 2400, 2800, 3200, 3500],
        costData: [600, 750, 900, 1000, 1100, 1250, 1500, 1350, 1200, 1400, 1600, 1750]
      }
    };

    this.chart.data.labels = newData[period].labels;
    this.chart.data.datasets[0].data = newData[period].revenueData;
    this.chart.data.datasets[1].data = newData[period].costData;
    this.chart.update();
  }

  getTotalReceita() {
    this.lancamentoService.getTotalMensal(1).subscribe(
      response => {
        this.totalReceita = response;
      },
      error => {
        console.error('Erro ao obter a versão:', error);
      }
    );
  }

  getTotalDespesa() {
    this.lancamentoService.getTotalMensal(2).subscribe(
      response => {
        this.totalDespesa = response;
      },
      error => {
        console.error('Erro ao obter a versão:', error);
      }
    );
  }

  getTotalReceitaAnual() {
    this.lancamentoService.getTotalAno(1).subscribe(
      response => {
        this.totalReceitaAnual = response;
      },
      error => {
        console.error('Erro ao obter a versão:', error);
      }
    );
  }

  getTotalDespesaAnual() {
    this.lancamentoService.getTotalAno(2).subscribe(
      response => {
        this.totalDespesaAnual = response;
      },
      error => {
        console.error('Erro ao obter a versão:', error);
      }
    );
  }

  getPorcentagemReceita(): string {
    let numeroReceita = '';
    this.lancamentoService.getPorcentagem(1).subscribe(
      response => {
        this.porcentagemReceita =  response;
      },
      error => {
        console.error('Erro ao obter a versão:', error);
      }
    );
    return numeroReceita;
  }

  getPorcentagemDespesa() {
    let numeroReceita = '';
    this.lancamentoService.getPorcentagem(2).subscribe(
      response => {
        this.porcentagemDespesa =  response;
      },
      error => {
        console.error('Erro ao obter a versão:', error);
      }
    );
    return numeroReceita;
  }
}
