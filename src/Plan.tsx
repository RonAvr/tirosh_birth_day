import React from "react";
import { Box, CardMedia } from "@mui/material";
// import Calendar from "./assets/Calendar.png";
import Calendar2 from "./assets/Calendar2.png";

const Plan: React.FC = () => {
  return (
    <Box>
      <CardMedia
        component="img"
        image={Calendar2}
        alt="Birthday Celebration"
        className="home-image"
        sx={{ maxHeight: 650, objectFit: "contain" }}
      />
    </Box>
  );
};

export default Plan;
