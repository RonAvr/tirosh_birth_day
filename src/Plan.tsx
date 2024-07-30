import React from "react";
import { Box, CardMedia } from "@mui/material";
import Calendar from "./assets/Calendar.png";

const Plan: React.FC = () => {
  return (
    <Box>
      <CardMedia
        component="img"
        image={Calendar}
        alt="Birthday Celebration"
        className="home-image"
        sx={{ maxHeight: 650, objectFit: "contain" }}
      />
    </Box>
  );
};

export default Plan;
