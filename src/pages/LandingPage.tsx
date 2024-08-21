import { ReactElement } from "react";
import { RandomCocktail } from "../components";
import { Box } from "@mui/material";

export default function LandingPage(): ReactElement {
  return (
    <Box className="landing-page" component="main">
      <RandomCocktail />
    </Box>
  );
}
