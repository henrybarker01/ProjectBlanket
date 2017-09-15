import { Component } from '@angular/core'

@Component({
    selector: "top-navigation",
    templateUrl: 'top-navigation.component.html'
})

export class TopNavigationComponent {
     getCanActivate() {
         return !!sessionStorage.getItem('accessToken'); 
    }
}
