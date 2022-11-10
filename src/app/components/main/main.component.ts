import {
  AfterViewInit, ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {ChildComponent} from "../child/child.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnChanges, OnInit, DoCheck, AfterViewInit, OnDestroy {

  @Input()
  value = 'first';

  @ViewChild('ipt')
  ipt: ElementRef;

  @ViewChild(ChildComponent)
  child: ChildComponent


  constructor(private detectorRef:ChangeDetectorRef) {
    console.log('constructor');
    console.log(this.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges');
    console.log(this.value);
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('onInit');
    console.log(this.value);
  }

  ngDoCheck(): void {
    console.log('doCheck');
  }

  ngAfterViewInit(): void {
    console.log(this.ipt.nativeElement);
    this.child.name = 'Olha';
    this.detectorRef.detectChanges()
  }

  ngOnDestroy(): void {
    console.log('Destroy');
  }

  changeValue(): void {

    this.child.name = this.ipt.nativeElement.value;
  }
}
