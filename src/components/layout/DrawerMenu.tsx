import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CategoryIcon from "@material-ui/icons/Category";
import { Menu as MenuIcon } from "@material-ui/icons";
import { categories } from "../../sample_data";
import { IconButton, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "center",
  },
}));

export type Anchor = "top" | "left" | "bottom" | "right";

interface Props {
  side?: Anchor;
  iconEdge?: false | "start" | "end" | undefined;
}
export default function DrawerMenu(
  { side = "left", iconEdge = "start" }: Props,
) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) =>
    (
      event: React.KeyboardEvent | React.MouseEvent,
    ) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className={classes.drawerHeader}>
        <ListItem>
          <ListItemIcon>
            <CategoryIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={"Categories"}
            primaryTypographyProps={{
              color: "primary",
              variant: "h2",
            }}
          />
        </ListItem>
        {/* <ListItemText primary={"Categories"} /> */}
      </div>
      <Divider />
      <List>
        {categories.map(({ text, slog }, index) => (
          <ListItem
            button
            key={text + index}
            alignItems="center"
            href={`categories/${slog}`}
          >
            {/* <a href={`categories/${slog}`} className={classes.link}> */}
            <ListItemText
              primary={text}
              primaryTypographyProps={{
                style: {
                  textAlign: "center",
                },
              }}
            />
            {/* </a> */}
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <IconButton
        color="inherit"
        edge={iconEdge}
        aria-label="menu"
        onClick={toggleDrawer(side, true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        PaperProps={{
          square: true,
          elevation: 3,
        }}
        SlideProps={{
          appear: true,
          enter: true,
          exit: true,
        }}
        transitionDuration={350}
        anchor={side}
        open={state[side]}
        onClose={toggleDrawer(side, false)}
      >
        {list(side)}
      </Drawer>
    </>
  );
}
