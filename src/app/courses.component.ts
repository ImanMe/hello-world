import { CoursesService } from './courses.service';
import {Component} from "@angular/core";

@Component({
    selector:'courses',
    template:`
    <h3>{{ getTitle() }}</h3>
    <img src={{imageUrl}} />
    <img [src]="imageUrl" />
    <ul>
        <li *ngFor="let course of courses">
            {{course}}
        </li>
    </ul>
    <button (click)="saveAll($event)" class="btn btn-primary" [class.active]="isActive">Save</button>
    <button (click)="makeActive()" class="btn btn-primary" [style.backgroundColor]="isActive ? 'green' : 'orange'">Cancel</button>
    <input type="text" (keyup.enter)="onKeyUp()"/>
    <input #email type="text" (keyup.enter)="onSecondKeyUp(email.value)"/>
    <input [(ngModel)]="emails" (keyup.enter)="onThirdKeyUp()"/>
    <br/>
    {{course.title | uppercase}} <br/>
    {{course.students | number}} <br/>
    {{course.rating | number:'1.2-2'}} <br/>
    {{course.price | currency:'AUD':true:'3.1-1'}} <br/>
    {{course.releaseDate | date:'shortDate'}} <br/>
    {{text | summary:20}}

    `
})
export class CoursesComponent{
    
    title="List Of Courses";
    courses;
    imageUrl="http://lorempixel.com/400/200";
    isActive = true;
    emails="iman@yahoo.com";
    course={
        title:"the complete angular course",
        rating:4.9745,
        students:30123,
        price:190.95,
        releaseDate:new Date(2016, 3, 1)
    }
    text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but";

    onKeyUp(){
        alert("Enter was pressed");
    }

    onSecondKeyUp(email){
        alert(email);
    }

    onThirdKeyUp(){
        alert(this.emails);
    }

    getTitle(){
        return this.title;
    }

    saveAll($event){   
        event.stopPropagation();    
        alert("Button was clicked" + $event);
    }

    makeActive(){
        this.isActive = !this.isActive;
    }

    

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }

   
}