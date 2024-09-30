"use client"; // Markiere diese Komponente als Client Component

import Image from "next/image";
import { Typography, Button, Box, Container, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import styles from "./page.module.css";

export default function Home() {
  const theme = useTheme(); // Zugriff auf das Theme, um die Farben zu verwenden

  return (
    <Container
      maxWidth="md"
      sx={{ backgroundColor: theme.palette.background.default, padding: 4 }}
    >
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <Typography
          variant="h4"
          color="primary"
          gutterBottom
          sx={{ marginTop: 2 }}
        >
          Willkommen zur Next.js Demo
        </Typography>

        <Typography variant="body1" color="text.primary" paragraph>
          Beginne, indem du <code>src/app/page.js</code> bearbeitest. Speichere
          die Datei und sieh die Änderungen sofort.
        </Typography>

        <Typography variant="body2" color="text.secondary" paragraph>
          Speichern Sie Ihre Arbeit und sehen Sie die Änderungen sofort.
        </Typography>

        <Box mt={4} display="flex" gap={2}>
          <Button
            variant="contained"
            color="primary"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy Now
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Docs
          </Button>
        </Box>

        <Divider sx={{ marginY: 4, backgroundColor: theme.palette.divider }} />

        <footer className={styles.footer}>
          <Box display="flex" gap={3}>
            <Button
              variant="text"
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: theme.palette.text.hint }}
            >
              Learn
            </Button>
            <Button
              variant="text"
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: theme.palette.text.hint }}
            >
              Examples
            </Button>
            <Button
              variant="text"
              href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: theme.palette.text.hint }}
            >
              Go to nextjs.org →
            </Button>
          </Box>
        </footer>
      </main>
    </Container>
  );
}
