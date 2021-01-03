import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InformacaoConsultaPage } from './informacao-consulta.page';

describe('InformacaoConsultaPage', () => {
  let component: InformacaoConsultaPage;
  let fixture: ComponentFixture<InformacaoConsultaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacaoConsultaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InformacaoConsultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
