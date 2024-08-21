import { AppBar, Box, SxProps, Typography as Text } from "@mui/material";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

export function Header(): ReactElement {
  const appBarStyling: SxProps = {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0.5rem 1rem",
  };

  const navStyling: SxProps = {
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
  };

  return (
    <AppBar sx={appBarStyling}>
      <Text variant="h3">Cocktail API</Text>
      <Box component="nav" sx={navStyling}>
        <Link to="/">
          <Text>Home</Text>
        </Link>
        <Link to="/">
          <Text>Search</Text>
        </Link>
      </Box>
    </AppBar>
  );
}
