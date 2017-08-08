import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TimelineComponent } from "./Timeline.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("TimelineComponent", () => {

  let fixture: ComponentFixture<TimelineComponent>;
  let component: TimelineComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [TimelineComponent]
    });

    fixture = TestBed.createComponent(TimelineComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
