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
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

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
    <Box
      className="wishes-container"
      display={"flex"}
      gap={2}
      flexDirection={{ xs: "column", md: "row" }}
    >
      <Paper
        elevation={3}
        className="sidebar"
        sx={{ height: { xs: 150, md: "auto" }, overflow: { xs: "auto" } }}
      >
        <List>
          {people.map((person) => (
            <ListItem
              button
              key={person.name}
              onClick={() => handleClick(person.video)}
            >
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={person.name} />
            </ListItem>
          ))}
        </List>
      </Paper>

      <Box
        className="video-container"
        flex={1}
        // border={"1px solid red"}
        maxWidth={"100%"}
      >
        {selectedVideo ? (
          <video
            key={selectedVideo}
            // height={"100%"}
            style={{ maxWidth: "100%" }}
            controls
          >
            <source src={`/videos/${selectedVideo}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Typography>Select a person to see their video message.</Typography>
        )}
      </Box>
    </Box>
  );
};

export default Wishes;
