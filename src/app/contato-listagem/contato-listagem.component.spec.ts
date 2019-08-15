import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoListagemComponent } from './contato-listagem.component';

describe('ContatoListagemComponent', () => {
  let component: ContatoListagemComponent;
  let fixture: ComponentFixture<ContatoListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
