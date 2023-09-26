import { useEffect, useState } from "react";
import SearchBar from "./component/search";
import axios from "axios";
import Results from "./component/result";

function App() {

  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [next, setNext] = useState([0, 10]);
  const [show, setShow] = useState();
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(false);

  console.log(text);
  const dateFecth = async () => {
    try {
      setLoad(true);
      let res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?limit=100&offset=100"
      );
      getpek(res.data.results);

      setLoad(false);
    } catch (error) {
      console.log(text, "Incorrect");
    }
  };
  const getpek = (p) => {
    p.map(async (info) => {
      let result = await axios.get(info.url);
      setData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  const handelNext = () => {
    setNext([next[1], next[1] + 10]);
    setPage(page + 1);
  };
  const handelPrev = () => {
    setNext([next[0] - 10, next[0]]);
    setPage(page - 1);
  };
  useEffect(() => {
    dateFecth();
  }, []);


  return (
    <div className="main">
      <div>
        <div>
          <h1>Pokemons</h1>
        </div>
        <div className="search">
          <SearchBar setText={setText} setNext={setNext} setPage={setPage} />
        </div>
        <div>
          {load ? (
            <div className="load">Loading.................</div>
          ) : (
            <Results data={data} next={next} text={text} setShow={setShow} />
          )}
        </div>
        {show > 10 && (
          <div className="btn">
            <div>
              {" "}
              {next[1] !== 100 && (
                <button id="next" onClick={handelNext}>
                  Next
                </button>
              )}
            </div>
            <div id="pagination">
              Page <span>{page}</span>
            </div>
            <div>
              {" "}
              {next[0] !== 0 && (
                <button id="previous" onClick={handelPrev}>
                  Prev
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
