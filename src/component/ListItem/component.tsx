import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import PendingIcon from "@mui/icons-material/Pending";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
    <ListItem button component={Link} to="/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={Link} to="/torrent">
      <ListItemIcon>
        <RocketLaunchIcon />
      </ListItemIcon>
      <ListItemText primary="Torrent" />
    </ListItem>
    <ListItem button component={Link} to="/candidate">
      <ListItemIcon>
        <PendingIcon />
      </ListItemIcon>
      <ListItemText primary="Candidate" />
    </ListItem>
    <ListItem button component={Link} to="/preference">
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Preference" />
    </ListItem>
  </React.Fragment >
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved tags
    </ListSubheader>
    <ListItemButton>
    </ListItemButton>
  </React.Fragment>
);
