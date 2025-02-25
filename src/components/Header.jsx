// app/components/Header.jsx
"use client"; 
/**
 * "use client" if we want dynamic interaction. 
 * If it's purely static, we can remove it. 
 * But let's keep it for consistency, 
 * especially if you plan on adding nav menus later.
 */

import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Refer a New Driver and Receive $150!</Typography>
      </Toolbar>
    </AppBar>
  );
}
