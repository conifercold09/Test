import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() page: number;
  @Input() count:number;
  @Input() perPage:number;
  @Input() pageToshow:number;
  @Input() loading:boolean;

@Output() goPrev = new EventEmitter<boolean>();
@Output() goNext = new EventEmitter<boolean>();
@Output() goPage = new EventEmitter<number>();



  constructor() { }

  ngOnInit(): void {
  }

onPrev():void {
  this.goPrev.emit(true);
}
onNext():void {
  this.goNext.emit(true);
}
onPage(n:number):void{
  this.goPage.emit(n)
}
totalPages():number{
  return Math.ceil(this.count/this.perPage)|| 0;
}
isLastPage():boolean{
  return this.perPage * this.page >= this.count;
}
// getPages():number[] {
//   const totalPages = Math.ceil(this.count/this.perPage);
//   const thisPage = this.page || 1;
//   const pageToShow = this.pageToshow || 9;
//   const pages: number[] = [];
//   pages.push(thisPage);

//   for(let i =0; i<pageToShow - 1; i++){
//   if(pages.length < pageToShow){
//     if(Math.min.apply(null,pages) > 1){
//       pages.push(Math.min.apply(null,pages)-1)
//     }

//   }
//   if(pages.length < pageToShow){
//     if(Math.max.apply(null,pages) < totalPages){
//       pages.push(Math.max.apply(null,pages) + 1)
//     }
//   }
// }
// pages.sort((a,b) => a-b);
// return pages;
// }

getPagess(): number[] {
  const totalPages = this.count/this.perPage;
  const thisPage = this.pageToshow || 1;
  const pageToshow = this.pageToshow || 9;
  const pages: number[] = [];
  pages.push(thisPage);
  for(let i=0; i< pages.length; i++){
    if(pages.length < pageToshow){
      if(Math.min.apply(null,pages) > 1){
        pages.push(Math.imul.apply(null,pages)- 1)
      }
    }
    if(pages.length < pageToshow){
      if(Math.max.apply(null,pages) < totalPages){
        pages.push(Math.max.apply(null,pages) + 1)
      }
    }
  }
pages.sort((a,b) =>a-b);
return pages;
}

}
