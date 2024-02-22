const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nba = require("nba");
const axios = require("axios");
const app = express();
app.use(cors());
dotenv.config();
let allPlayers = [];
let allTeams = [...nba.teams];

const getPlayers = async () => {
  await nba.stats
    .playersInfo({
      LeagueID: "00",
      Season: "2023-24",
      IsOnlyCurrentSeason: "0",
    })
    .then((data) => {
      data.forEach((e) => {
        e["fullName"] = e.firstName + " " + e.lastName;
      });
      allPlayers = [...data];
    });
};
getPlayers();
setInterval(() => {
  getPlayers();
}, 100000000);
app.get("/shots", (req, res) => {
  console.log(req.query.pid);
  const params = {
    PlayerID: req.query.pid,
    Season: req.query.Season,
    SeasonType: req.query.SeasonType,
    LeagueID: "00",
    TeamID: "0",
    ContextMeasure: "FGM",
    MeasureType: "Base",
    PerMode: "PerGame",
    PlusMinus: "N",
    PaceAdjust: "N",
    Rank: "N",
    Month: "0",
    OpponentTeamID: "0",
    Period: "0",
    LastNGames: "0",
  };
  nba.stats.shots(params).then((data) => res.send(data));
});

app.get("/teamRatings", (req, res) => {
  let avgDefRating = 0,
    avgOffRating = 0,
    avgNetRating = 0;

  const params = {
    MeasureType: "Advanced",
    PerMode: "Per100Possessions",
    PlusMinus: "Y",
    PaceAdjust: "Y",
    Rank: "N",
    LeagueID: "00",
    Season: req.query.Season,
    TeamID: "",
    Outcome: "",
    Location: "",
    Month: "0",
    SeasonSegment: "",
    DateFrom: "",
    DateTo: "",
    OpponentTeamID: "0",
    VsConference: "",
    VsDivision: "",
    GameSegment: "",
    Period: "0",
    LastNGames: req.query.LastNGames,
    SeasonType: "Regular Season",
  };

  nba.stats.teamStats(params).then((d) => {
    d.forEach((element) => {
      avgOffRating += element.offRating;
      avgDefRating += element.defRating;
      avgNetRating += element.netRating;
    });
    res.send({
      ratings: d,
      avgOffRating: avgOffRating / 30,
      avgDefRating: avgDefRating / 30,
      avgNetRating: avgNetRating / 30,
    });
  });
});
app.get("/homepage", async (req, res) => {
  const params = {
    GameScope: "Season",
    LeagueID: "00",
    PlayerOrTeam: "Team",
    PlayerScope: "All Players",
    Season: "2023-24",
    SeasonType: "Regular Season",
    StatType: "Advanced",
  };
  nba.stats.homepageV2(params).then((d) => res.send(d));
});
app.get("/getPtsVsEfg", async (req, res) => {
  const params = {
    LastNGames: "0",
    LeagueID: "00",
    MeasureType: "Base",
    Month: "0",
    OpponentTeamID: "0",
    PORound: "0",
    PaceAdjust: "N",
    PerMode: "PerGame",
    Period: "0",
    PlusMinus: "N",
    Rank: "N",
    Season: "2023-24",
    SeasonType: "Regular Season",
    TeamID: "0",
  };

  nba.stats.playerStats(params).then((data) => {
    let leaguefgm = 0,
      leaguefga = 0,
      leaguePpg = 0,
      leagueMins = 0,
      leagueTs = 0;
    let playerPtsEfg = [];
    data.leagueDashPlayerStats.forEach((element) => {
      //console.log(element);
      if (element.gp * element.min >= 100) {
        const efg = (element.fgm + 0.5 * element.fG3M) / element.fga;
        leaguefgm += element.fgm + 0.5 * element.fG3M;
        leaguefga += element.fga;
        leaguePpg += element.pts;
        leagueMins += element.min;
        leagueTs += element.fta;
        const trueshooting =
          element.pts / (2 * (element.fga + 0.44 * element.fta));
        const ptsEfgobj = {
          player: element.playerName,
          Team: element.teamAbbreviation,
          PointsPerGame: element.pts,
          efg: efg,
          Minutes: element.min,
          PointsPerMinute: element.pts / element.min,
          TrueShooting: trueshooting,
        };
        playerPtsEfg.push(ptsEfgobj);
      }
    });
    const obj = {
      pointsEfg: playerPtsEfg,
      leagueAvg: leaguefgm / leaguefga,
      leaguePPG: leaguePpg / leagueMins,
      leagueTs: leaguePpg / (2 * (leaguefga + 0.44 * leagueTs)),
    };
    res.json(obj);
  });
});
app.get("/playerInfo", async (req, res) => {
  const playerInfoParams = {
    PlayerID: req.query.PlayerID,
    SeasonType: "Regular Season",
    LeagueID: "00",
  };
  nba.stats.playerInfo(playerInfoParams).then((data) => res.send(data));
});
app.get("/search", (req, res) => {
  const finding = req.query.name.toLowerCase();
  let ans1 = [
    ...allTeams.filter((e) => {
      if (e.teamName.toLowerCase().includes(finding)) return e;
      if (e.abbreviation.toLowerCase().includes(finding)) return e;
    }),
  ];
  let ans2 = [
    ...allPlayers.filter((e) => {
      if (e.fullName.toLowerCase().includes(finding)) return e;
    }),
  ];
  res.send({ players: ans2, teams: ans1 });
});
const port = 3001;
app.listen(port, () => {
  console.log("server running");
});
