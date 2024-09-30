"use client";

import React from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";

/*
Todo: 
- AppStore Komponente erstellen
- Suchleiste und Filter erstellen
- App Galerie erstellen
- ggf grid verwenden (grid2)

*/

const AppStore = () => {
  const theme = useTheme();

  return (
    <Box sx={{ padding: 4 }}>
      {/* Suchleiste und Filter */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 4,
        }}
      >
        {/* Suchfeld */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <SearchIcon sx={{ color: theme.palette.text.primary }} />
          <TextField
            variant="outlined"
            placeholder="Suche"
            size="small"
            sx={{
              backgroundColor: theme.palette.secondary.main,
              borderRadius: 1,
              color: theme.palette.text.primary,
            }}
          />
        </Box>

        {/* Filterbutton */}
        <Button
          variant="outlined"
          startIcon={<FilterListIcon />}
          sx={{
            backgroundColor: theme.palette.secondary.main,
            textTransform: "none",
            color: theme.palette.text.primary,
            borderColor: theme.palette.secondary.main,
          }}
        >
          Filter
        </Button>
      </Box>

      {/* App Galerie */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "flex-start",
        }}
      >
        {/* Java 22 Umgebung App */}
        <Link href="/appstore/java-22-umgebung" passHref>
          <Box
            sx={{
              textAlign: "center",
              cursor: "pointer",
              textDecoration: "none",
              flex: "1 1 calc(25% - 16px)",
              maxWidth: "200px",
            }}
          >
            <Image
              src="/jdk22.jpeg"
              alt="JDK 22"
              width={150}
              height={100}
              style={{ borderRadius: "8px" }}
            />
            <Typography
              variant="body1"
              sx={{ mt: 2, color: theme.palette.text.primary }}
            >
              Java 22 Umgebung
            </Typography>
          </Box>
        </Link>

        {/* GitLab App */}
        <Link href="/appstore/gitlab" passHref>
          <Box
            sx={{
              textAlign: "center",
              cursor: "pointer",
              textDecoration: "none",
              flex: "1 1 calc(25% - 16px)",
              maxWidth: "200px",
            }}
          >
            <Image
              src="/gitlab.png" // Pfad zum Bild anpassen
              alt="GitLab"
              width={150}
              height={100}
              style={{ borderRadius: "8px" }}
            />
            <Typography
              variant="body1"
              sx={{ mt: 2, color: theme.palette.text.primary }}
            >
              GitLab
            </Typography>
          </Box>
        </Link>

        {/* Weitere Apps hier... */}
      </Box>
    </Box>
  );
};

export default AppStore;
