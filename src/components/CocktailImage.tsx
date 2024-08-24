import { ReactElement } from "react";

interface IImageProps {
  alt: string;
  src: string;
}

export function CocktailImage({ alt, src }: IImageProps): ReactElement {
  return (
    <figure className="cocktail-image">
      <img src={src} alt={alt} />
    </figure>
  );
}
