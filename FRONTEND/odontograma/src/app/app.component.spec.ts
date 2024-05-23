import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { OdontogramaComponent } from './components/odontograma/odontograma.component';
import { OdontogramaAnatomicoUIComponent } from './components/ui/odontograma-anatomico/anatomico.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [AppComponent, OdontogramaComponent, OdontogramaAnatomicoUIComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'odontograma'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('odontograma');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Odontograma'
    );
  });

  it('should change title when call changeTitle method', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.changeTitle('nuevo titulo');
    expect(app.title).toEqual('nuevo titulo');
  });
});
