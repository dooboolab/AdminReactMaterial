// This file is shared across the demos.
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CodeIcon from '@material-ui/icons/Code';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import LinkIcon from '@material-ui/icons/Link';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import Table from '@material-ui/core/Table';

import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

export const mailFolderListItems = (
  <div>
    <ListItem>
      <ListItemIcon>
        <PhoneAndroidIcon />
      </ListItemIcon>
      <ListItemText primary="Utils" />
    </ListItem>
    <NavLink
      exact={true}
      to='/table'
      key={0}
    >
      <ListItem button>
        <ListItemText secondary="Table 1" />
      </ListItem>
    </NavLink>
    <NavLink
      exact={true}
      to='/home'
      key={1}
    >
      <ListItem button>
        <ListItemText secondary="Menu 2" />
      </ListItem>
    </NavLink>
    <NavLink
      exact={true}
      to='/home'
      key={2}
    >
      <ListItem button>
        <ListItemText secondary="Menu 3" />
      </ListItem>
    </NavLink>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Send Email" />
    </ListItem>
  </div>
);
