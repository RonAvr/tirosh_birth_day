import React, { useEffect } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Slider,
  IconButton,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { useState, useRef } from "react";
import tirosh from "./assets/Tirosh.jpg";

const Home: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>("00:00");
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentProgress, setCurrentProgress] = useState<number>(0);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  function convertDurationToMMSS(durationSeconds: number) {
    const minutes = Math.floor(durationSeconds / 60);
    const seconds = Math.floor(durationSeconds % 60);
    const newTime = `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
    return newTime;
  }

  return (
    <Card className="home-card">
      <CardContent>
        <Typography
          variant="h5"
          component="h1"
          gutterBottom
          className="home-header"
        >
          Welcome to Tirosh's 30th Birthday Official Website!
        </Typography>
        <CardMedia
          component="img"
          image={tirosh}
          alt="Birthday Celebration"
          className="home-image"
          sx={{ maxHeight: 650, objectFit: "contain" }}
        />
        <Box mt={2} textAlign="center">
          <audio
            ref={audioRef}
            src="/Bday_Song.mp3"
            preload="auto"
            onTimeUpdate={() => {
              if (audioRef.current) {
                setCurrentTime(
                  convertDurationToMMSS(audioRef.current?.currentTime || 0)
                );
                const progress =
                  (audioRef.current?.currentTime / audioRef.current.duration) *
                  100;
                setCurrentProgress(progress);
              }
            }}
          />
          <IconButton onClick={handlePlayPause} color="primary">
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
          <Box display={"flex"} gap={3} alignItems={"center"}>
            <Typography>
              {/* {convertDurationToMMSS(audioRef.current?.currentTime || 0)} */}
              {currentTime}
            </Typography>
            <Slider
              min={0}
              max={100}
              // defaultValue={0}
              aria-label="Audio progress"
              valueLabelDisplay="auto"
              value={currentProgress}
              onChange={(event, newValue) => {
                if (audioRef.current) {
                  const newTime =
                    (newValue as number) * (audioRef.current.duration / 100);
                  audioRef.current.currentTime = newTime;
                }
              }}
            />
            {convertDurationToMMSS(audioRef.current?.duration || 0)}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Home;
