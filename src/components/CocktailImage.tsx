import { Box, SxProps, Theme } from "@mui/material";
import { ReactElement } from "react";

interface IFigureProps {
  borderRadius?: string;
  image: string;
  minHeight: string;
}

export function CocktailImage(props: IFigureProps): ReactElement {
  const styling: SxProps<Theme> = {
    backgroundImage: `url(${props.image})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <Box
      borderRadius={props.borderRadius}
      component="figure"
      minHeight={props.minHeight}
      sx={styling}
    ></Box>
  );
}
