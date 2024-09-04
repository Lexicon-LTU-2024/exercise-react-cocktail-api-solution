import { ReactElement } from "react";
import { Image } from "../../../../components";
import { getImageSizeSuffix, IMAGE_BASE_PATH, ImageSize } from "../../../../utilities";

interface IIngredientImage {
  ingredient: string;
  size: ImageSize;
}

export function IngredientImage({ ingredient, size }: IIngredientImage): ReactElement {
  const imagePath: string = IMAGE_BASE_PATH + ingredient + getImageSizeSuffix(size);
  console.log(imagePath);

  return (
    <article className="ingredient-image">
      <Image alt={ingredient} src={imagePath} />
      <figcaption className="name">{ingredient}</figcaption>
    </article>
  );
}
