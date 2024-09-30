"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const CourseDetails = () => {
  const params = useParams();
  const theme = useTheme();

  const slug = params.slug;

  if (!slug) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ padding: 4 }}>
      <Typography
        variant="h4"
        sx={{ mb: 4, color: theme.palette.text.primary }}
      >
        Kursdetails: {slug}
      </Typography>
      <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
        Hier finden Sie Informationen über den Kurs "{slug}".
      </Typography>
    </Box>
  );
};

export default CourseDetails;
