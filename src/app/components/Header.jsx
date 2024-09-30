"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";

const Header = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.background.default,
        borderBottom: `1px solid ${theme.palette.divider}`,
        color: theme.palette.text.primary,
        paddingX: 10,
      }}
      elevation={0}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo Routing */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Link href="/" passHref>
            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            >
              <Image
                src="/Deploologo.jpeg"
                alt="Logo"
                width={80}
                height={60}
                priority
              />
            </Box>
          </Link>
          <Button
            component={Link}
            href="/appstore"
            sx={{ color: theme.palette.text.primary }}
          >
            Appstore
          </Button>
          <Button
            component={Link}
            href="/dashboard"
            sx={{ color: theme.palette.text.primary }}
          >
            Dashboard
          </Button>
          <Button
            component={Link}
            href="/support"
            sx={{ color: theme.palette.text.primary }}
          >
            Support
          </Button>
        </Box>

        {/* Login Button on the right side */}
        <Box display="flex" alignItems="center">
          <Button
            component={Link}
            href="/login"
            startIcon={<Avatar sx={{ width: 24, height: 24 }} />}
            sx={{
              color: theme.palette.text.primary,
              borderColor: theme.palette.primary.main,
            }}
          >
            Anmelden
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
