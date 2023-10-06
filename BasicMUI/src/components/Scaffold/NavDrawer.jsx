import {
  AppBar,
  Drawer,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ContactForm } from "../Form/ContactForm";
import { ContactCardGrid } from "../Grid/ContactCardGrid";
import { ContactTable } from "../Table/ContactTable";
import { ContactDataGrid } from "../DataGrid/ContactDataGrid";
import { useTheme } from "@mui/material/styles";

const listRoutes = [
  { text: "Input Form", route: "/form" },
  { text: "Contact Card Grid", route: "/grid" },
  { text: "Contact Table" },
  { text: "Contact Data Grid" },
];

const drawerWidth = 240;

const themedStyles = (theme) => {
  return {
    appBar:{
      zIndex: theme.zIndex.drawer + 1
    }
  };
};

const simpleStyles = {
  drawer: {
    width: drawerWidth,
    "& .MuiBackdrop-root": {
      display: "none",
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgba(120, 120, 120, 0.2)",
  },
  content: {
    marginLeft: drawerWidth,
    padding: 3,
  },
};

export const NavDrawer = () => {

  const theme = useTheme();

  return (
    <BrowserRouter>
      <div>
        <AppBar position="fixed" sx={themedStyles(theme).appBar}>
          <Toolbar>
            <Typography variant="h6">Advanced Material UI Styling</Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="temporary"
          open={true}
          sx={simpleStyles.drawer}
          PaperProps={{
            sx: simpleStyles.drawerPaper,
            elevation: 9,
          }}
        >
          <Toolbar />
          <List>
            {listRoutes.map((nav, index) => (
              <ListItem key={nav.text}>
                <Link to={nav.route}>{nav.text}</Link>{" "}
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main style={simpleStyles.content}>
          <Toolbar />
          <Routes>
            <Route path={"/"} element={<ContactForm />} />
            <Route path={"/form"} element={<ContactForm />} />
            <Route path={"/grid"} element={<ContactCardGrid />} />
            <Route path={"/table"} element={<ContactTable />} />
            <Route path={"/dategrid"} element={<ContactDataGrid />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};
