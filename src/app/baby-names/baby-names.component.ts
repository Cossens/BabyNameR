import { Component, NgModule, OnInit, OnDestroy } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs/Subscription';

import gql from 'graphql-tag';

import 'rxjs/add/operator/toPromise';

const allNamesQuery = gql`
  query allBabyNames{
  viewer{
    allBabyNames{
      edges{
        node{
          id,
          name
        }
      }
    }
  }
}
`;
// const allNamesQuery = gql`
//   query babyNames{
//     allBabyNames{
//           id,
//           name
//       }
//     }
// `;

@Component({
  selector: 'app-baby-names',
  templateUrl: './baby-names.component.html',
  styleUrls: ['./baby-names.component.css']
})
export class BabyNamesComponent implements OnInit, OnDestroy {

  loading = true;
  allNames: any;
  allNamesSub: Subscription;

  
  constructor(
    private apollo: Apollo
  ) {}

  setImage(url: string) {
    const styles = {
      'background-image':  `url(${url})`,
      'background-size': 'cover',
      'padding-bottom': '100%',
    };
    return styles;
  }

  handleDelete(id: string) {
    this.apollo.mutate({
      mutation: gql`
        mutation ($id: ID!) {
          deleteName(id: $id) {
            id
          }
        }
      `,
      variables: {
        id: id,
      },
      updateQueries: {
        allNames: (prev: any) => {
          const allNames = prev.allNames.filter(Name => Name.id !== id);

          return {
            allNames: [...allNames]
          };
        }
      }
    }).toPromise();
  }

  ngOnInit() {
    console.log(allNamesQuery);
    this.allNamesSub = this.apollo.watchQuery({
      query: allNamesQuery
    }).subscribe(({data, loading}: any) => {
      console.log(data);

      //this.allNames = data.viewer.allBabyNames.edges;
      this.allNames = ['first', 'second'];
      this.loading = loading;
    });
  }

  ngOnDestroy() {
    this.allNamesSub.unsubscribe();
  }
}



// @Component({
//   selector: 'app-feed',
//   template: `
//     <a routerLink="/create" class="fixed bg-white top-0 right-0 pa4 ttu dim black no-underline">+ New Name</a>
//     <div class="w-100" style="max-width: 400px">
//       <div class="pa3 bg-black-05 ma3" *ngFor="let Name of allNames">
//         <div class="w-100" [ngStyle]="setImage(Name.imageUrl)"></div>
//         <div class="pt3">
//           {{Name.description}}&nbsp;
//           <span class='red f6 pointer dim' (click)="handleDelete(Name.id)">Delete</span>
//         </div>
//       </div>
//     </div>
//   `,
//   host: {'style': 'width: 100%; display: flex; justify-content: center;'}
// })