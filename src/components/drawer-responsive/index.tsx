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
import { Link } from "react-router-dom";

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
        <Button onClick={closeFn}>X</Button>
        <Divider />
        <Link to="/heroes">heroes</Link> <br />
        <Link to="/">home</Link>
      </Box>
    </MuiDrawer>
  );
};
