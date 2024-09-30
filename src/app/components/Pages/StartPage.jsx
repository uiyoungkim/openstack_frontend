"use client";

import React from "react";
import { Box, Typography, Link } from "@mui/material";
import Image from "next/image";

const StartPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        mt: 8,
        px: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
        <Image
          src="/wolkenlogo.png"
          alt="Deploo Logo"
          width={400}
          height={250}
        />
        <Typography
          variant="h1"
          component="span"
          sx={{
            fontWeight: "bold",
            ml: 2,
          }}
        >
          deploo
        </Typography>
      </Box>

      <Typography variant="h2" sx={{ mb: 2, fontWeight: "bold" }}>
        Deployment leicht gemacht
      </Typography>

      <Typography variant="body1" sx={{ maxWidth: "600px", mb: 4 }}>
        Dozenten können – ohne tiefgehende Kenntnisse von OpenStack etc. –
        Anwendungen auf der OpenStack Plattform deployen, die dann durch
        Studierende im Rahmen von Lehrveranstaltungen genutzt werden können.
      </Typography>

      <Link href="/about" color="primary" underline="hover">
        Mehr Erfahren
      </Link>
    </Box>
  );
};

export default StartPage;
