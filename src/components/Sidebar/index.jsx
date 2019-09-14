import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { destroySession } from "#/engine/util";
import { setActiveMenuItem } from "#/engine/actions/ui";
import { Divider, ListItemText, ListItemIcon, ListItem, List, Drawer } from "@material-ui/core";
import SidebarListItemLink from "./components/SidebarListItemLink";
import Logo from "#/components/Logo";
import profileDefault from "#/assets/img/profile_default.jpg";
import { ReactComponent as CabinetIcon } from "#/assets/img/cabinet-icon.svg";
import { ReactComponent as OrdersIcon } from "#/assets/img/orders-icon.svg";
import { ReactComponent as SettingsIcon } from "#/assets/img/settings-icon.svg";
import { ReactComponent as LogoutIcon } from "#/assets/img/icon-logout.svg";
import "./index.scss";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

const navigationLinks = [
  {
    IconComponent: CabinetIcon,
    title: "Главная",
    link: "",
    id: 1,
  },
  {
    IconComponent: OrdersIcon,
    title: "Организация",
    link: "/organization",
    id: 2,
  },
  {
    IconComponent: SettingsIcon,
    title: "Настройки",
    link: "/settings",
    id: 3,
  },
];

const Sidebar = props => {
  const { match } = props;
  const classes = useStyles();

  const logout = () => {
    destroySession();
    props.history.push("/");
  };

  const handleClick = id => {
    props.setActiveMenuItem(id);
  };

  const renderedLinks = navigationLinks.map((link, key) => (
    <SidebarListItemLink
      {...link}
      key={key}
      match={match}
      handleClick={handleClick}
      active={link.id === props.activeMenuItem}
    />
  ));

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
          <Logo />
        </div>
      </div>
      <div className="toolbar-items">
        <div className="toolbar-items__navigation">
          <List>{renderedLinks}</List>
          <Divider />
          <List>
            <ListItem button onClick={logout}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Выход" />
            </ListItem>
          </List>
        </div>
        <div className="toolbar-items__badge">
          <div className="toolbar-items__badge__avatar">
            <img src={profileDefault} alt="" />
          </div>
          <div className="toolbar-items__badge__title">Мастер Йода</div>
        </div>
      </div>
    </Drawer>
  );
};

const mapStateToProps = state => ({
  activeMenuItem: state.ui.activeMenuItem,
});

const mapDispatchToProps = {
  setActiveMenuItem,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Sidebar),
);
