import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReportBinPage } from './report-bin.page';

describe('ReportBinPage', () => {
  let component: ReportBinPage;
  let fixture: ComponentFixture<ReportBinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportBinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReportBinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
