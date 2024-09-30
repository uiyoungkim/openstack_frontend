"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";

const Dashboard = () => {
  const theme = useTheme();

  // Example courses
  const courses = ["WWI22SEA", "WWI22SEB", "WWI23SEA", "WWI23SEB", "WWI22SCA"];

  return (
    <Box sx={{ padding: 4 }}>
      <Typography
        variant="h4"
        sx={{ mb: 2, color: theme.palette.text.primary, textAlign: "center" }}
      >
        Willkommen Herr Eichberg
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ mb: 4, color: theme.palette.text.secondary, textAlign: "center" }}
      >
        Sie haben 5 laufende Kurse und 24 aktive VMs
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
        }}
      >
        {courses.map((course) => (
          <Link key={course} href={`/dashboard/${course}`} passHref>
            <Box
              sx={{
                width: "150px",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: theme.palette.secondary.main,
                borderRadius: 2,
                cursor: "pointer",
                textDecoration: "none",
                color: theme.palette.text.primary,
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              <Typography variant="h6">{course}</Typography>
            </Box>
          </Link>
        ))}

        {/* New Course */}
        <Box
          sx={{
            width: "150px",
            height: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: `2px dashed ${theme.palette.divider}`,
            borderRadius: 2,
            cursor: "pointer",
            "&:hover": {
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
            },
          }}
        >
          <Typography variant="h4" sx={{ color: theme.palette.divider }}>
            +
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
