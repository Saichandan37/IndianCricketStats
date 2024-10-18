import React from "react";
import { data } from "./AllOdiPlayers";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const OdiPlayerList = () => {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 14, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}></Grid>
        ))}
      </Grid>
      <div className="flex-containerL">
        {data.map((player) => (
          <p1 key={player.No} className=" card ">
            <Paper elevation={15}>
              <div className="sub_title flex-itemsL">
                <Typography variant="h6" color="primary">
                  {player.Name}
                </Typography>
              </div>
              <Typography variant="h7" color="secondary">
                {player.First}-{player.Last} Matches: {player.Mat}
              </Typography>
              <img
                url={player.image}
                style={{ width: "100px", height: "auto" }}
              />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography variant="h8" color="info">
                    {" "}
                    Batting Stats
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Inndings: {player.Inn}
                    Not Outs: {player.NO}
                    Runs:{player.Runs}
                    HighScore:{player.HS}
                    Avg:{player.Avg}
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography color="info"> Bowling Stats</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Balls: {player.Balls}
                    Medin Overs:{player.Mdn}
                    Wickets:{player.Wkt}
                    Runs:{player.BowlRuns}
                    Avg:{player.BowlAvg}
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ArrowDownwardIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography color="info"> Feilding Stats</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Catches: {player.Ca}
                    Stumpings:{player.St}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Paper>
          </p1>
        ))}
      </div>
    </>
  );
};

export default OdiPlayerList;
