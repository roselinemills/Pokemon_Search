import Info from "./info";

function Ability({ stats }) {
  return (
    <>
      {stats.map((a, id) => (
        <Info key={id} det={a} />
      ))}
    </>
  );
}

export default Ability;
