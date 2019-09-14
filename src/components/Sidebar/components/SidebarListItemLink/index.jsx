import React from "react";
import { ListItemText, ListItemIcon, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";

const SidebarListItemLink = props => {
  return (
    <ListItem
      button
      component={Link}
      to={`${props.match.url}${props.link}`}
      onClick={() => props.handleClick(props.id)}
      className={props.active ? "sidebarListItemLinkActive" : ""}
    >
      <ListItemIcon>
        <props.IconComponent />
      </ListItemIcon>
      <ListItemText primary={props.title} />
    </ListItem>
  );
};

export default SidebarListItemLink;
