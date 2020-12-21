import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuasInformacoesPage } from './suas-informacoes.page';

describe('SuasInformacoesPage', () => {
  let component: SuasInformacoesPage;
  let fixture: ComponentFixture<SuasInformacoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuasInformacoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuasInformacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
