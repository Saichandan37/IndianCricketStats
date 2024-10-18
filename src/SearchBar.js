import React, { useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { data } from "./AllOdiPlayers";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const SearchBar = (props) => {
  const [value, setValue] = useState("");
  const [item, setItem] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(item);

  const handleInputChange = (event, value) => {
    setInputValue(value);

    // Filter the options manually based on input
    const filtered = item.filter((option) =>
      option.label.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  var temp = [];
  data.map((player) => {
    temp.push({
      label: player.Name,
      id: player.No,
      First: player.First,
      Last: player.Last,
      Mat: player.Mat,
      Inn: player.Inn,
      NO: player.NO,
      Runs: player.Runs,
      HS: player.HS,
      Avg: player.Avg,
      Balls: player.Balls,
      Mdn: player.Mdn,
      BowlRuns: player.BowlRuns,
      Wkt: player.Wkt,
      BBM: player.BBM,
      BowlAvg: player.BowlAvg,
      Ca: player.Ca,
      St: player.St,
    });
  });

  useEffect(() => {
    if (value.length < 1) {
      return;
    }
    if (value.length === 1) {
      props.handleSearch();
    }
    setItem(temp);
  }, [value]);

  return (
    <>
      <>
        <Autocomplete
          disablePortal
          options={item}
          getOptionLabel={(option) => option.label}
          inputValue={inputValue}
          onInputChange={handleInputChange}
          sx={{ width: 500, background: "#650e0e" }}
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth={true}
              label="Search for Player"
              shouldItemRender={(item, value) =>
                item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
              }
              getItemValue={(item) => item.label}
              renderItem={(item, highlighted) => (
                <div
                  key={item.id}
                  style={{
                    backgroundColor: highlighted ? "#eee" : "transparent",
                  }}
                >
                  {item.label}
                </div>
              )}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              disablePortal
            />
          )}
        />
      </>
      {value.length !== 0 ? (
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
            {filteredOptions.map((player) => (
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
      ) : null}
    </>
  );
};

export default SearchBar;
