import React, { Component} from 'react'
import '../assets/jss/LoginPage.css'

import { Admin, Resource, ListGuesser } from 'react-admin';
import authProvider from '../providers/authProvider.js';
import dataProvider from '../datas/dataProvider.js'
import jsonServerProvider from 'ra-data-json-server';
import { fetchUtils } from 'ra-core';
import simpleRestProvider from 'ra-data-simple-rest';



import { gamersInfos } from '../datas/gamersInfos.js';
import { makeStyles } from '@material-ui/core/styles';

import {UsersList} from "./Users";
import {PostsList} from "./Posts";
import {EventsList} from "./Events";






class Back extends Component {
  constructor(){
    super()
    this.state = {
      // gamersList: []
      dataProvider: jsonServerProvider('https://jsonplaceholder.typicode.com')
    }
  }

  
  
  render(){
    //connect the data provider to the REST endpoint
    const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
   
  
    return(
      <Admin authProvider={authProvider} dataProvider={this.state.dataProvider}>
      <Resource name="users" list={UsersList}/>
      <Resource name="posts" list={PostsList}/>
      {/* <Admin dataProvider={simpleRestProvider('http://localhost:8000/api/')}> */}

      {/*  <Resource name="events" list={EventsList} /> */}
      </Admin>

    )
  }
}
export default Back