import { Component, Input, OnInit } from '@angular/core';
import { BasketRow } from 'src/app/shared/basket-row';
import { House } from 'src/app/shared/house.model';
import { Item } from 'src/app/shared/item.model';
import { ShoppingListService } from 'src/app/shopping-list.service';

@Component({
  selector: 'app-shopping-main-mobile',
  templateUrl: './shopping-main-mobile.component.html',
  styleUrls: ['./shopping-main-mobile.component.css']
})
export class ShoppingMainMobileComponent implements OnInit {
  @Input() house:House = new House("","", 0, "", "",[new BasketRow(new Item("","","","","",0),0)])
  @Input() index: number = 0;
  @Input() showButtons: boolean = true;
  collapse: boolean = false;
  collapseIcon: string = "+";
  shoppingListHouses: House[] = [];
  houseSpelling = "house";

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onCollapse() {
    this.collapse = !this.collapse;
    if (this.collapseIcon==="+"){
      this.collapseIcon="-";
    } else {
      this.collapseIcon="+";
    }
  };

  onAddHouseToCart() {
    this.shoppingListService.addSingleHouse(this.house)
  }

  onRemoveHouseFromCart() {
    this.shoppingListService.removeSingleHouse(this.index)
  }

  onRemoveHouseRowFromCart() {
    this.shoppingListService.removeHouseRow(this.index)
  }

  totalSingleHousePrice() {
    return this.shoppingListService.countSingleHousePrice(this.index);
  }

  spelling(amount: number) {
    if(amount>1) {
      this.houseSpelling="houses";
    } else {
      this.houseSpelling="house"; 
    };
    return this.houseSpelling; 
  };

}
