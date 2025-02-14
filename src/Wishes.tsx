import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  ListItemIcon,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const people = [
  { name: "Johnny", video: "Johnny.mp4" },
  { name: "Anne", video: "Anne.mp4" },
  { name: "Esther", video: "Esther.mp4" },
  { name: "Lauren", video: "Lauren.mp4" },
  { name: "Shoval", video: "Shoval.mp4" },
  { name: "Brandon", video: "Brandon.mp4" },
  { name: "Rachel", video: "Rachel.mp4" },
  { name: "Tair & Dor", video: "Tair & Dor.mp4" },
  { name: "Arnon & Dana", video: "Arnon & Dana.mp4" },
  { name: "Ella", video: "Ella.mp4" },
  { name: "Katie", video: "Katie.mp4" },
  { name: "Adar", video: "Adar.mp4" },
];

const Wishes: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [name, setName] = useState<string>("");

  const handleClick = (video: string) => {
    setSelectedVideo(video);
  };

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value as string);
    const name = event.target.value as string;
    const video_name = `${name}.mp4`;
    setName(name);
    setSelectedVideo(video_name);
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
        sx={{ height: { xs: "auto", md: "auto" }, overflow: { xs: "auto" } }}
      >
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Name</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={name}
              label="Name"
              onChange={handleChange}
            >
              {people.map((person) => (
                <MenuItem value={person.name}>
                  <MenuItem>{person.name}</MenuItem>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
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
        </Box>
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
