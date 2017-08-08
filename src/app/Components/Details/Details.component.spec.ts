import { NO_ERRORS_SCHEMA } from "@angular/core";
import { DetailsComponent } from "./Details.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("DetailsComponent", () => {

  let fixture: ComponentFixture<DetailsComponent>;
  let component: DetailsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [DetailsComponent]
    });

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
