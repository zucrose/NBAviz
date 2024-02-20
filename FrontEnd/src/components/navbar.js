import axios from "axios";
import { useEffect, useState } from "react";
import { serverUrl } from "../utils/constants";
import { Link } from "react-router-dom";
import { auto } from "@observablehq/plot";

export default function Navbar() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const searchFunction = async () => {
    if (searchValue === "") setSearchResult([]);
    else {
      const { data: data } = await axios.get(serverUrl + "search", {
        params: {
          name: searchValue,
        },
      });
      setSearchResult(data);
    }
  };
  useEffect(() => {
    searchFunction();
  }, [searchValue]);
  return (
    <>
      <nav
        className="navbar  fixed-top navbar-expand-lg"
        style={{ backgroundColor: "#0c0d0d", height: "60px" }}
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <Link to="/teamRatings" className="nav-link mx-3">
            Teams
          </Link>

          <Link to="/ptsefg" className="nav-link mx-3">
            Players
          </Link>
          <div className="" style={{ marginLeft: "auto", marginRight: "20px" }}>
            <div className="col mr-0">
              <input
                style={{ width: "200px" }}
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onBlur={(e) => setSearchValue("")}
                placeholder="Search"
              ></input>
            </div>
            <div className="col">
              {searchResult.length != 0 ? (
                <div
                  style={{
                    top: "50px",
                    position: "absolute",
                    maxHeight: "300px",
                    width: "200px",
                    backgroundColor: "#0c0d0d",
                    overflow: "scroll",
                  }}
                >
                  {searchResult.teams.map((e) => (
                    <div className="mb-2">{e.teamName}</div>
                  ))}
                  {searchResult.players.map((e) => (
                    <div className="mb-2">{e.fullName}</div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
