import { ReactElement } from "react";

interface IImageProps {
  alt: string;
  src: string;
}

export function CocktailImage({ alt, src }: IImageProps): ReactElement {
  const classes = ["cocktail-image"];

  return (
    <figure className={classes.join(" ")}>
      <img src={src} alt={alt} />
    </figure>
  );
}
