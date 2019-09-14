import React from "react";
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import logoIcon from "#/assets/img/logo-icon.svg";
import logoBrand from "#/assets/img/logo-brand.svg";
import { ReactComponent as CabinetIcon } from "#/assets/img/cabinet-icon.svg";
import { ReactComponent as OrdersIcon } from "#/assets/img/orders-icon.svg";
import { ReactComponent as SettingsIcon } from "#/assets/img/settings-icon.svg";
import "./index.scss";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

const Sidebar = props => {
  const { match } = props;
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar}>
        <div className="toolbar-logo">
          <div className="toolbar-logo__inner">
            <div className="toolbar-logo__box">
              <img src={logoIcon} alt="" />
            </div>
            <div className="toolbar-logo__brand">
              <img src={logoBrand} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="toolbar-items">
        <List>
          <ListItem button component={Link} to={`${match.url}`}>
            <ListItemIcon>
              <CabinetIcon />
            </ListItemIcon>
            <ListItemText primary="Главная" />
          </ListItem>
          <ListItem button component={Link} to={`${match.url}/organization`}>
            <ListItemIcon>
              <OrdersIcon />
            </ListItemIcon>
            <ListItemText primary="Организация" />
          </ListItem>
          <ListItem button component={Link} to={`${match.url}/settings`}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Настройки" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default withRouter(Sidebar);
