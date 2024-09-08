import { ReactElement } from "react";

interface IImageProps {
  alt: string;
  size?: string;
  src: string;
}

export function Image({ alt, size, src }: IImageProps): ReactElement {
  return (
    <figure className="cocktail-image" >
      <img src={src} alt={alt} />
    </figure>
  );
}
