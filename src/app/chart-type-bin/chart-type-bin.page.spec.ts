import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChartTypeBinPage } from './chart-type-bin.page';

describe('ChartTypeBinPage', () => {
  let component: ChartTypeBinPage;
  let fixture: ComponentFixture<ChartTypeBinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartTypeBinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChartTypeBinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
