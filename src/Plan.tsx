import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  ListItemIcon,
  CardMedia,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Calendar from "./assets/Calendar.png";
const drawerWidth = 240;

const people = [
  { name: "Johnny", video: "Johnny.mp4" },
  { name: "Anne", video: "Anne.mp4" },
  { name: "Esther", video: "Esther.mp4" },
  { name: "Lauren", video: "Lauren.mp4" },
  { name: "Shoval", video: "Shoval.mp4" },
  { name: "Brandon", video: "Brandon.mp4" },
  { name: "Rachel", video: "Rachel.mp4" },
  { name: "Tair & Dor", video: "Tair.mp4" },
  { name: "Arnon & Dana", video: "Arnon.mp4" },
  { name: "Ella", video: "Ella.mp4" },
  { name: "Katie", video: "Katie.mp4" },
  // { name: 'Adar', video: 'Adar.mp4' },
];

const Wishes: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleClick = (video: string) => {
    setSelectedVideo(video);
  };

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

export default Wishes;
