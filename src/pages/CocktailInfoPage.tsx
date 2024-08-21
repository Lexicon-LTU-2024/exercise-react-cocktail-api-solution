import { ReactElement } from "react";
import { Box, Button, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { useTypedLoaderData } from "../hooks";
import { ICocktail } from "../utils";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function CocktailInfoPage(): ReactElement {
  const cocktail = useTypedLoaderData<ICocktail>();

  console.log(cocktail.image);

  return (
    <Box className="cocktail-info-page" component="main">
      <Paper className="cocktail-info-wrapper">
        <Box
          className="left-side"
          component="figure"
          sx={{ backgroundImage: `url(${cocktail.image})` }}
        />
        <Box className="right-side" component="section">
          <Typography className="name" variant="h4">
            {cocktail.name}
          </Typography>
          <Typography variant="body1">Best served in: {cocktail.glass}</Typography>
          <Typography variant="body1">Ingredients & Measurements</Typography>
          <List disablePadding>
            {cocktail.ingredients.map((ing, i) => (
              <ListItem dense disablePadding key={ing}>
                <ListItemText className="list-item-text">
                  {cocktail.measures[i]} {ing}
                </ListItemText>
              </ListItem>
            ))}
          </List>
          <Typography variant="body1">{cocktail.instructions}</Typography>
          <Box className="actions">
            <Button endIcon={<FavoriteBorderIcon />} variant="contained">
              Save to favorites
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
