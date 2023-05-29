import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import PendingIcon from "@mui/icons-material/Pending";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <RocketLaunchIcon />
      </ListItemIcon>
      <ListItemText primary="Torrent" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PendingIcon />
      </ListItemIcon>
      <ListItemText primary="Candidate" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Preference" />
    </ListItemButton>
  </React.Fragment>
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
