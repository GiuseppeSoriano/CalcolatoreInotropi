import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalcolaOtherFarmacoPage } from './calcola-other-farmaco.page';

describe('CalcolaOtherFarmacoPage', () => {
  let component: CalcolaOtherFarmacoPage;
  let fixture: ComponentFixture<CalcolaOtherFarmacoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcolaOtherFarmacoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalcolaOtherFarmacoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
