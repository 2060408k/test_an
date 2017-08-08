import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TimelineBoxComponent } from "./TimelineBox.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("TimelineBoxComponent", () => {

  let fixture: ComponentFixture<TimelineBoxComponent>;
  let component: TimelineBoxComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [TimelineBoxComponent]
    });

    fixture = TestBed.createComponent(TimelineBoxComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
