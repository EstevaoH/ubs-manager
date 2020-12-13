import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarcaConsultaPage } from './marca-consulta.page';

describe('MarcaConsultaPage', () => {
  let component: MarcaConsultaPage;
  let fixture: ComponentFixture<MarcaConsultaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaConsultaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarcaConsultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
