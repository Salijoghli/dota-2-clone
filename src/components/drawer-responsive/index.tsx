import {
  Box,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Drawer as MuiDrawer } from "@mui/material";
import { MouseEvent } from "react";

const navItems = ["Home", "About", "Contact"];

type DrawerProps = {
  isOpen: boolean;
  closeFn: (event: MouseEvent<HTMLButtonElement>) => void;
};
export const Drawer = ({ isOpen, closeFn }: DrawerProps) => {
  return (
    <MuiDrawer
      variant="persistent"
      open={isOpen}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": {
          width: "100%",
          zIndex: 1000,
        },
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          MUI
        </Typography>
        <Button onClick={closeFn}>X</Button>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </MuiDrawer>
  );
};
