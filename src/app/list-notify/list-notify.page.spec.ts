import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListNotifyPage } from './list-notify.page';

describe('ListNotifyPage', () => {
  let component: ListNotifyPage;
  let fixture: ComponentFixture<ListNotifyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNotifyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListNotifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
