import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalcolaDiluizionePage } from './calcola-diluizione.page';

describe('CalcolaDiluizionePage', () => {
  let component: CalcolaDiluizionePage;
  let fixture: ComponentFixture<CalcolaDiluizionePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcolaDiluizionePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalcolaDiluizionePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
