import React, { Component} from 'react'
import '../../assets/jss/LoginPage.css'
import authProvider from '../../datas/authProvider.js';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import dataProvider from '../../datas/dataProvider.js'
import { gamersInfos } from '../../datas/gamersInfos.js';

class Back extends Component {
  constructor(){
    super()
  }
  
  render(){
  
    return(
      <Admin authProvider={authProvider} dataProvider={dataProvider}>
        
        <Resource name="streamers" list={gamersInfos} />
      </Admin>

    )

  }
}
export default Back