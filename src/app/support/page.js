"use client";

import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import RoundedButton from "../components/RoundedButton";

/* To DO:
- Auslagern und mit Componenten arbeiten
- Ticket-Details anzeigen
- Ticket erstellen
- Ticket-Status ändern
- Ticket-Priorität ändern
- Ticket-Zuweisung ändern
- Ticket-Details bearbeiten
- Ticket löschen
- Ticket-Liste sortieren
- Ticket-Liste filtern
- Ticket-Liste durchsuchen
usw

*/
const Support = () => {
  const theme = useTheme();

  // Dummy Tickets
  const tickets = [
    {
      status: "👨‍💻",
      title: "Admin Berechtigung",
      description: "Bitte Admin Berechtigung erteilen",
      assignedTo: "Automatisch",
      priority: "Gering",
    },
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Typography
        variant="h4"
        sx={{ mb: 4, color: theme.palette.text.primary, textAlign: "center" }}
      >
        Von mir erstellte Tickets
      </Typography>

      {/* Ticket-Table -> should be changed better and as a component*/}
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: 2,
          mb: 4,
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Status</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Beschreibung</TableCell>
              <TableCell>Zugewiesene Person</TableCell>
              <TableCell>Priorität</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tickets.map((ticket, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography variant="h5">{ticket.status}</Typography>
                </TableCell>
                <TableCell>{ticket.title}</TableCell>
                <TableCell>{ticket.description}</TableCell>
                <TableCell>{ticket.assignedTo}</TableCell>
                <TableCell>{ticket.priority}</TableCell>
              </TableRow>
            ))}
            {/* Just for Empty Space */}
            {[...Array(3)].map((_, index) => (
              <TableRow key={`empty-${index}`}>
                <TableCell colSpan={5}>&nbsp;</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ textAlign: "center" }}>
        <RoundedButton
          label="erstellen"
          onClick={() => {
            console.log("Ticket erstellen geklickt");
          }}
          startIcon={<AddIcon />}
        />
      </Box>
    </Box>
  );
};

export default Support;
