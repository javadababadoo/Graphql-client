import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import gql from 'graphql-tag';
import { Query } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private apollo: Apollo) {

  }

  ngOnInit() {
    this.apollo.watchQuery<Query>({
      query: gql`
        query allCourses {
          allCourses {
            id
            title
            author
            description
            topic
            url
          }
        }
      `
    })
      .valueChanges
      .pipe(
        map(result => result.data.allDevices)
      );
  }
}
