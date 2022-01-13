import {
  AppBar,
  Box,
  Button,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
} from "@material-ui/core";
import React from "react";
import { IMenu, ISubMenu, menuArray } from "./menu-content";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles(() => ({
  appBar: {
    backgroundColor: "#Acc980",
    display: "grid",
    justifyContent: "center",
  },
}));

export const MenuComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openMenu, setOpenMenu] = React.useState<
    { name: string; open: boolean }[]
  >([]);
  const classes = useStyle();
  const history = useHistory();

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    name: string
  ) => {
    const oldValue = openMenu.find((item) => item.name === name);
    const openMenuCopy = [...openMenu];
    if (!oldValue) {
      openMenuCopy.push({ name, open: true });
    } else {
      openMenuCopy.forEach((item) => {
        if (item.name === name) {
          item.open = !item.open;
        }
      });
    }
    setAnchorEl(event.currentTarget);
    setOpenMenu(openMenuCopy);
  };

  const handleClose = (name: string) => {
    const openMenuCopy = [...openMenu];
    openMenuCopy.forEach((item) => {
      if (item.name === name) {
        item.open = !item.open;
      }
    });
    setAnchorEl(null);
    setOpenMenu(openMenuCopy);
  };

  const generateSubMenu = (subMenuItems: ISubMenu[], name: string) => {
    const menuItems: any[] = [];
    subMenuItems.forEach((subItem) => {
      menuItems.push(
        <MenuItem
          onClick={() => {
            handleClose(name);
            history.push(subItem.link);
          }}
          key={subItem.name}
        >
          {subItem.name}
        </MenuItem>
      );
    });
    return menuItems;
  };

  const generateMenu = (item: IMenu) => {
    const openState = openMenu.find((element) => element.name === item.name);

    const menuOnClick = (
      event: React.MouseEvent<HTMLButtonElement>,
      name: string
    ) => {
      if (item.subMenu.length > 0) {
        handleClick(event, name);
      } else {
        if (item.link) {
          history.push(item.link);
        }
      }
    };

    return (
      <>
        <Button
          id="basic-button"
          key={item.name}
          onClick={(event) => menuOnClick(event, item.name)}
        >
          {item.name}
        </Button>
        <Menu
          id="basic-menu"
          key={item.name}
          open={openState ? openState.open : false}
          anchorEl={anchorEl}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={() => handleClose(item.name)}
        >
          {generateSubMenu(item.subMenu, item.name)}
        </Menu>
      </>
    );
  };

  return (
    <Box>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          {menuArray.map((item) => {
            return generateMenu(item);
          })}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
