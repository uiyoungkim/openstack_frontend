"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const AppDetails = () => {
  const params = useParams();
  const theme = useTheme();

  // Use Slug Parameter from URL
  const slug = params.slug;

  // If slug is not available, show a loading indicator
  if (!slug) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Typography
        variant="h4"
        sx={{ mb: 4, color: theme.palette.text.primary }}
      >
        App-Details: {slug}
      </Typography>
      <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
        Hier werden die Informationen über die App "{slug}" angezeigt.
      </Typography>
    </Box>
  );
};

export default AppDetails;
