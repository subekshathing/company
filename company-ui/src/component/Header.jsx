import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { Badge, Tooltip } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useQuery } from "@tanstack/react-query";
import $axios from "../lib/axios/axios.instance";

const drawerWidth = 240;
const navItems = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About Us", path: "/about" },
  { id: 3, name: "Service", path: "/services" },
  { id: 4, name: "Contact", path: "/contact" },
  { id: 5, name: "Shop", path: "/shop" }
];

const Header = (props) => {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Get user role
  const userRole = localStorage.getItem("role");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Fetch cart item count
  const { isPending, data } = useQuery({
    queryKey: ["get-cart-item-count"],
    queryFn: async () => {
      return await $axios.get("/cart/item/count");
    },
    enabled: userRole === "user"
  });

  const cartItemCount = data?.data?.cartItemCount;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        R Krishi & Pashu Firm
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => navigate(item.path)}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background: "#25783e"
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          {/* Menu Icon for Mobile */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Title */}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            R Krishi & Pashu Firm
          </Typography>

          {/* Navbar for larger screens */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              flexGrow: 1
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.id}
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  display: { xs: "none", sm: "block" }
                }}
                onClick={() => navigate(item.path)}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          {/* Cart, Login, Hi Sections Always in Navbar */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              ml: "auto"
            }}
          >
            {userRole === "user" && (
              <>
                <IconButton
                  sx={{ color: "#fff" }}
                  onClick={() => navigate("/cart")}
                >
                  <Badge badgeContent={cartItemCount} color="success">
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </IconButton>
                <Typography
                  sx={{
                    display: "block",
                    color: "#fff",
                    fontWeight: "bold"
                  }}
                >
                  Hi, {localStorage.getItem("firstName")}
                </Typography>
                <Tooltip title="Logout">
                  <IconButton
                    sx={{ color: "#fff" }}
                    onClick={() => {
                      navigate("/home");
                      localStorage.clear();
                    }}
                  >
                    <LogoutIcon />
                  </IconButton>
                </Tooltip>
              </>
            )}
            {userRole === "admin" && (
              <>
                <Typography
                  sx={{
                    display: "block",
                    color: "#fff",
                    fontWeight: "bold"
                  }}
                >
                  Hi, {localStorage.getItem("firstName")}
                </Typography>
                <Tooltip title="Logout">
                  <IconButton
                    sx={{ color: "#fff" }}
                    onClick={() => {
                      navigate("/home");
                      localStorage.clear();
                    }}
                  >
                    <LogoutIcon />
                  </IconButton>
                </Tooltip>
              </>
            )}
            {(!userRole || userRole === "guest") && (
              <Button
                sx={{ color: "#fff", fontWeight: "bold" }}
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Small Screens */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      {/* Content below the AppBar */}
      <Box sx={{ flexGrow: 1 }}>{props.children}</Box>
    </Box>
  );
};

export default Header;
