import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() section: any;
  hiddenItems: any[];
  displayedItems: any[];
  isCollapsed = true;
  collapseText = (this.isCollapsed ? 'Show all' : 'Hide');

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.section.links.length >= 2) {
      this.displayedItems = this.createDisplayedArray(this.section.links)
      this.hiddenItems = this.createHiddenArray(this.section.links);
    } else {
      this.displayedItems = this.section.links;
    }
  }

  createDisplayedArray(items: any) {
    return items.slice(0, 2);
  }

  createHiddenArray(items: any) {
    return items.slice(2, this.section.links.length);
  }

  toggleContent() {
    this.isCollapsed = !this.isCollapsed;
    this.collapseText = this.isCollapsed ? 'Show all' : 'Hide';
  }

}
