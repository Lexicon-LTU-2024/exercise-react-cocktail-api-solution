import { ReactElement, useState } from "react";
import { getRandomCocktail, ICocktail } from "../utils";
import { useTypedLoaderData } from "../hooks";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export function RandomCocktail(): ReactElement {
  const initialRandomCocktail = useTypedLoaderData<ICocktail>();
  const [cocktail, setCocktail] = useState<ICocktail>(initialRandomCocktail);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleOnClick = () => {
    setIsLoading(true);
    getRandomCocktail().then((randomCocktail) => {
      setCocktail(randomCocktail);
      setIsLoading(false);
    });
  };

  return (
    <Card className="random-cocktail">
      <CardMedia className="image" image={cocktail.image} />
      <CardContent className="content">
        <Typography variant="h5">{cocktail.name}</Typography>
      </CardContent>
      <CardActions className="actions">
        <Button color="error" onClick={handleOnClick} variant="contained">
          {isLoading ? <CircularProgress color="error" size="1rem" /> : "Another!"}
        </Button>
        <Link to={`cocktail/${cocktail.id}`}>
          <Button variant="contained">See more</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
