import { ReactElement } from "react";
import { Image } from "../../../../components";
import { IMAGE_BASE_PATH, ImageSize } from "../../../../utilities";
import { Link } from "react-router-dom";

interface IIngredientImage {
  ingredient: string;
  size?: ImageSize;
}

export function IngredientImage({ ingredient, size }: IIngredientImage): ReactElement {
  const classes: string[] = ["ingredient-image"];
  const imagePath: string = IMAGE_BASE_PATH + ingredient + ".png";

  if (size) {
    switch (size) {
      case ImageSize.Large:
        classes.push("large");
        break;
      case ImageSize.Medium:
        classes.push("medium");
        break;
      case ImageSize.Small:
        classes.push("small");
        break;
    }
  }

  return (
    <Link to="#" className={classes.join(" ")}>
      <Image alt={ingredient} src={imagePath} />
      <figcaption className="name">{ingredient}</figcaption>
    </Link>
  );
}
