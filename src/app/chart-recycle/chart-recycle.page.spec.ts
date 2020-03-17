import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChartRecyclePage } from './chart-recycle.page';

describe('ChartRecyclePage', () => {
  let component: ChartRecyclePage;
  let fixture: ComponentFixture<ChartRecyclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartRecyclePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChartRecyclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
