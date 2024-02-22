import axios from "axios";
import { useEffect, useState } from "react";
import { serverUrl } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [toggleSearch, setToggleSearch] = useState(false);
  const navigate = useNavigate();
  const searchFunction = async () => {
    if (searchValue === "") setSearchResult([]);
    else {
      const { data: data } = await axios.get(serverUrl + "search", {
        params: {
          name: searchValue,
        },
      });
      console.log(data);
      setSearchResult(data);
      setToggleSearch(true);
    }
  };
  useEffect(() => {
    searchFunction();
  }, [searchValue]);
  return (
    <>
      <nav
        className="navbar  fixed-top "
        style={{ backgroundColor: "#0c0d0d", height: "60px" }}
      >
        <Link to="/teamRatings" className="nav-link mx-3">
          Teams
        </Link>

        <Link to="/ptsefg" className="nav-link mx-3">
          Players
        </Link>
        <div
          className=""
          style={{
            marginLeft: "auto",
            marginRight: "20px",
          }}
        >
          <div className="col mr-0">
            <input
              style={{ width: "200px" }}
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search"
              onBlur={(e) => setTimeout(() => setToggleSearch(false), 500)}
            ></input>
          </div>
          <div className="col">
            {searchResult.length !== 0 && toggleSearch === true ? (
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
                  <div
                    className="mb-2"
                    onClick={() =>
                      navigate("/players", {
                        state: { playerID: e.playerId },
                      })
                    }
                  >
                    {e.fullName}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    </>
  );
}
