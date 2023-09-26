import Ability from "./ability";

function Results({ data, next, text, setShow }) {
  let display = data.filter(
    (info) => info.name.indexOf(text.toLocaleLowerCase()) !== -1
  );
  const resul = display.map((a, id) =>
    id >= next[0] && id < next[1] ? (
      <div className="card" key={id}>
        <div className="info">
          <div>Weight: {a.weight}</div>
          <div>
            <Ability stats={a.stats} />
          </div>
        </div>

        <div>
          <img src={a.sprites.front_default} alt={a.name} />
          <div className="name">
            <span id="name">
              {a.name.charAt(0).toUpperCase() + a.name.slice(1)}
            </span>
          </div>
        </div>
      </div>
    ) : (
      ""
    )
  );
  setShow(display.length);
  return (
    <div>
      <div className="card-con">{resul}</div>
    </div>
  );
}

export default Results;
