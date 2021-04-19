import React from 'react';
import { List, Datagrid,ReferenceField, TextField, EmailField } from 'react-admin';

export const PostsList = props => (
   <List {...props}>
       <Datagrid rowClick="edit">
           <ReferenceField source="userId" reference="users"><TextField source="name" /></ReferenceField>
           <TextField source="id" />
           <TextField source="title" />
           <TextField source="body" />
       </Datagrid>
   </List>
);