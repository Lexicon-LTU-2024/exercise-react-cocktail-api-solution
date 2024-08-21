import { Box, CircularProgress, Typography } from "@mui/material";
import { ReactElement } from "react";

export function LoadingPage(): ReactElement {
  return (
    <Box className="loading-page" component="main">
      <CircularProgress size="10rem" />
      <Typography variant="body1">Loading...</Typography>
    </Box>
  );
}
