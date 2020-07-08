import { Component, OnInit } from '@angular/core';
import { ITraining } from './training';

@Component({
  selector : 'app-trainings',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css'],
})

export class TrainingListComponent implements OnInit{

  pageTitle: string = "Training List";

  _listFilter: string;

  get listFilter(): string{
    return this._listFilter;
  }
  set listFilter(value: string){
     this._listFilter = value;
     this.filteredTrainings = this.listFilter ? this.performFilter(this.listFilter) : this.trainings;
  }

  filteredTrainings: ITraining[];

  trainings: ITraining[] = [
    {
      "id": 1,
      "title": "Learn OAuth 2.0 - Get started as an API Security Expert",
      "source": "udemy",
      "author": "Matthias Biehl",
      "url": "https://www.udemy.com/course/learn-oauth-2/",
      "length": 215,
      "tags": "web",
      "favorite": 0,
      "completed": 0,
      "released": "02/01/2020"
    },
    {
      "id": 2,
      "title": "RxJS Beyond the Basics: Creating Observables from scratch",
      "source": "egghead",
      "author": "",
      "url": "https://egghead.io/courses/rxjs-beyond-the-basics-creating-observables-from-scratch",
      "length": 38,
      "tags": "rxjs",
      "favorite": 0,
      "completed": 0,
      "released": "08/01/2017"
    },
    {
      "id": 3,
      "title": "Advanced Node.js",
      "source": "pluralsight",
      "author": "Samer Buna",
      "url": "https://www.pluralsight.com/courses/nodejs-advanced",
      "length": 226,
      "tags": "node.js",
      "favorite": 0,
      "completed": 0,
      "released": "02/01/2017"
    },
    {
      "id": 4,
      "title": "Manage UI State with the Angular Router",
      "source": "egghead",
      "author": "John Lindquist",
      "url": "https://egghead.io/courses/manage-ui-state-with-the-angular-router",
      "length": 31,
      "tags": "Angular",
      "favorite": 0,
      "completed": 0,
      "released": "01/01/1970"
    },
    {
      "id": 5,
      "title": "Building GraphQL APIs with ASP.NET Core",
      "source": "pluralsight",
      "author": "Roland Guijt",
      "url": "https://www.pluralsight.com/courses/building-graphql-apis-aspdotnet-core",
      "length": 83,
      "tags": "ASP.Net, GraphQL",
      "favorite": 0,
      "completed": 0,
      "released": "01/01/2019"
    },
    {
      "id": 6,
      "title": "JavaScript: The Hard Parts, v2",
      "source": "frontendmasters",
      "author": "Will Sentance",
      "url": "https://frontendmasters.com/courses/javascript-hard-parts-v2/",
      "length": 776,
      "tags": "JavaScript",
      "favorite": 0,
      "completed": 0,
      "released": "01/01/2020"
    },
    {
      "id": 7,
      "title": "Angular Testing Masterclass (with FREE E-Book)",
      "source": "udemy",
      "author": "Angular University",
      "url": "https://www.udemy.com/course/angular-testing-course/",
      "length": 62,
      "tags": "Angular, testing",
      "favorite": 0,
      "completed": 0,
      "released": "03/01/2020"
    },
    {
      "id": 8,
      "title": "RabbitMQ: Message queue concepts from start to finish",
      "source": "udemy",
      "author": "Timo Heiten",
      "url": "https://www.udemy.com/course/rabbitmq-from-start-to-finish/",
      "length": 264,
      "tags": "RabbitMQ",
      "favorite": 0,
      "completed": 0,
      "released": "02/01/2020"
    },
    {
      "id": 9,
      "title": "Full Stack for Front-End Engineers, v2",
      "source": "frontendmasters",
      "author": "Jem Young",
      "url": "https://frontendmasters.com/courses/fullstack-v2/",
      "length": 749,
      "tags": "Front-End",
      "favorite": 0,
      "completed": 0,
      "released": "11/01/2019"
    },
    {
      "id": 10,
      "title": "Angular automation using Protractor + Typescript + Cucumber",
      "source": "udemy",
      "author": "Karthik KK",
      "url": "https://www.udemy.com/course/protractor/",
      "length": 432,
      "tags": "Angular, Protractor, Cucumber",
      "favorite": 0,
      "completed": 0,
      "released": "03/01/2019"
    },
    {
      "id": 11,
      "title": "Front End Component Architecture",
      "source": "udemy",
      "author": "Ebenezer Ogbu",
      "url": "https://www.udemy.com/course/front-end-component-architecture-react-and-angular/",
      "length": 246,
      "tags": "Front-End, Angular, React",
      "favorite": 0,
      "completed": 0,
      "released": "05/01/2019"
    }
  ];
constructor() {
  this.filteredTrainings = this.trainings;
  this.listFilter = '';
}

  performFilter(filterBy: string): ITraining[] {

    filterBy = filterBy.toLocaleLowerCase();

    return this.trainings.filter((training: ITraining)  =>

    training.title.toLocaleLowerCase().indexOf(filterBy) !== -1);

  }
  ngOnInit(): void {

    console.log('...Start Application!!!');
  }

}
