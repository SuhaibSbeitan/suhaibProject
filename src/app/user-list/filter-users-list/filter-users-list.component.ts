import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  Renderer2,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-filter-users-list',
  templateUrl: './filter-users-list.component.html',
  styleUrls: ['./filter-users-list.component.css']
})
export class FilterUsersListComponent implements OnInit, OnChanges, AfterViewInit {

  @ViewChild('inputValue') inputValue: ElementRef;
  @Output() valueChanges: EventEmitter<string> = new EventEmitter<string>();
  @Input() listItemsNum: number;

  message: string;


  private _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.valueChanges.emit(value);
  }


  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.listItemNum && !changes.listItemNum.currentValue) {
      this.message = 'No Matches found';
    } else {
      this.message = `Items Found: ${this.listItemsNum}`;
    }
  }

  ngAfterViewInit(): void {
    this.renderer.selectRootElement(this.inputValue.nativeElement).focus();
  }

}
