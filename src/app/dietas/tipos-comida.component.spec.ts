import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposComidaComponent } from './tipos-comida.component';

describe('TiposComidaComponent', () => {
  let component: TiposComidaComponent;
  let fixture: ComponentFixture<TiposComidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TiposComidaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TiposComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
