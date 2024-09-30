"use client";

import React from "react";
import { Box, Typography, Link } from "@mui/material";
import Image from "next/image";

const About = () => {
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
      {/* Back Button */}
      <Link href="/" sx={{ alignSelf: "flex-start", mb: 2 }}>
        <Typography
          variant="body1"
          sx={{ display: "flex", alignItems: "center" }}
        >
          &#x2190; Zurück
        </Typography>
      </Link>

      {/* First Introduction with Flexbox */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
          mb: 4,
          width: "100%",
          maxWidth: "800px",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h4"
            component="h1"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            OpenStack
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            OpenStack, die Open-Source-Cloud-Plattform, bietet unzählige
            Möglichkeiten zur Verwaltung von virtuellen Maschinen und
            Cloud-Ressourcen.
            <b> Deploo</b> macht diese mächtige Technologie für nicht-technische
            Benutzer zugänglich, ohne tiefere technische Kenntnisse zu
            erfordern.
          </Typography>
          <Link
            href="https://www.openstack.org/"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
          >
            Visit OpenStack
          </Link>
        </Box>
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <Image
            src="/openstack.png"
            alt="OpenStack Logo"
            width={250}
            height={150}
          />
        </Box>
      </Box>

      {/* Second Introduction Flexbox */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
          width: "100%",
          maxWidth: "800px",
        }}
      >
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <Image
            src="/wolkenlogo.png"
            alt="Deploo Logo"
            width={350}
            height={200}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            Deploo
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Deploo vereinfacht den Zugriff auf OpenStack, sodass alle Benutzer
            mühelos:
          </Typography>
          <ul style={{ textAlign: "left" }}>
            <li>Virtuelle Maschinen bereitstellen</li>
            <li>Ressourcen effizient verwalten</li>
            <li>Eine benutzerfreundliche Oberfläche nutzen</li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
