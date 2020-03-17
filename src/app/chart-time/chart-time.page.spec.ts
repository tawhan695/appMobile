import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChartTimePage } from './chart-time.page';

describe('ChartTimePage', () => {
  let component: ChartTimePage;
  let fixture: ComponentFixture<ChartTimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartTimePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChartTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
