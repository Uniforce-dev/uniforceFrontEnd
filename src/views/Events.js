import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const EventsList = props => (
   <List {...props}>
       <Datagrid rowClick="edit">
           <TextField source="id" />
           <TextField source="date" />
           <TextField source="game" />
       </Datagrid>
   </List>
);