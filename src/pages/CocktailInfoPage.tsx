import { ReactElement } from "react";
import { Box, Paper, SxProps, Theme } from "@mui/material";
import { CocktailDetails, CocktailImage } from "../components";
import { useTypedLoaderData } from "../hooks";
import { ICocktail } from "../utils";

// display: grid;
// grid-template-columns: 1fr 1fr;
// gap: 1rem;
// width: 800px;

export default function CocktailInfoPage(): ReactElement {
  const cocktail = useTypedLoaderData<ICocktail>();

  const paperStyling: SxProps<Theme> = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1rem",
    width: "800px",
  };

  return (
    <Box className="cocktail-info-page" component="main">
      <Paper className="cocktail-info-wrapper" sx={paperStyling}>
        <CocktailImage borderRadius="4px 0 0 4px" image={cocktail.image} minHeight="400px" />
        <CocktailDetails cocktail={cocktail} />
      </Paper>
    </Box>
  );
}
