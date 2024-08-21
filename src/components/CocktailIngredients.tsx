import { Box, List, ListItem, ListItemText, Typography as Text } from "@mui/material";
import { ReactElement } from "react";

interface ICocktailIngredientsProps {
  ingredients: string[];
  measures: string[];
}

export function CocktailIngredients(props: ICocktailIngredientsProps): ReactElement {
  return (
    <Box>
      <Text variant="body1">Ingredients & Measurements</Text>
      <List disablePadding>
        {props.ingredients.map((ing, i) => (
          <ListItem dense disablePadding key={ing}>
            <ListItemText className="list-item-text">
              {props.measures[i]} {ing}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
