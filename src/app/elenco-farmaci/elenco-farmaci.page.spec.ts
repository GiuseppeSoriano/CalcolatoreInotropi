import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ElencoFarmaciPage } from './elenco-farmaci.page';

describe('ElencoFarmaciPage', () => {
  let component: ElencoFarmaciPage;
  let fixture: ComponentFixture<ElencoFarmaciPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ElencoFarmaciPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ElencoFarmaciPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
