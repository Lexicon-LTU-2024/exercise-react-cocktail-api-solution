import { ReactElement } from "react";
import { Box, Paper } from "@mui/material";
import { CocktailDetails, CocktailImage } from "../components";
import { useTypedLoaderData } from "../hooks";
import { ICocktail } from "../utils";

export default function CocktailInfoPage(): ReactElement {
  const cocktail = useTypedLoaderData<ICocktail>();

  return (
    <Box className="cocktail-info-page" component="main">
      <Paper className="cocktail-info-wrapper">
        <CocktailImage borderRadius="4px 0 0 4px" image={cocktail.image} minHeight="400px" />
        <CocktailDetails cocktail={cocktail} />
      </Paper>
    </Box>
  );
}
