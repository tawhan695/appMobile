import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DownloadPagePage } from './download-page.page';

describe('DownloadPagePage', () => {
  let component: DownloadPagePage;
  let fixture: ComponentFixture<DownloadPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DownloadPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
