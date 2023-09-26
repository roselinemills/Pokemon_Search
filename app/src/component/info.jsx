function Info({ det }) {
  return (
    <>
      <div>
        <span>
          {det?.stat?.name.charAt(0).toUpperCase() + det?.stat?.name.slice(1)}{" "}
        </span>
        :<span>{"  "}
   {det?.base_stat}</span>
      </div>
    </>
  );
}

export default Info;
