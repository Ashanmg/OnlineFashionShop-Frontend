import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  public page = 3;
  public pagesCount = 6;
    //   public totalCount = 22;
  @Input() totalCount: number;
  constructor() {
  }

  ngOnInit() {
  }

  range(): Array<any> {
      console.log(this.totalCount);
      if (!this.pagesCount) { return []; }
      const step = 2;
      const doubleStep = step * 2;
      const start = Math.max(0, this.page - step);
      let end = start + 1 + doubleStep;
      if (end > this.pagesCount) { end = this.pagesCount; }

      const ret = [];
      for (let i = start; i !== end; ++i) {
          ret.push(i);
      }

      return ret;
  }

  pagePlus(count: number): number {
      return + this.page + count;
  }

  search(i: any): void {
      this.page = i;
  }

}
