import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from './shopping-list.service';
import{ FormsModule } from '@angular/forms';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private slService: ShoppingListService,private loggingService: LoggingService) { }

  ngOnInit(): void {
    this.ingredients=this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) =>{
          this.ingredients=ingredients;
        }
      );
      this.loggingService.printLog('Hello from ShoppinListComponent ngOnInit');
  }

  onEditItem(index: number){
    this.slService.startedEditing.next(index);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
