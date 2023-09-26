function SearchBar({ setText, setNext, setPage }) {
  const textHandler = (e) => {
    setText(e.target.value);
    setNext([0, 10]);
    setPage(1);
  };
  return (
    <>
      <div>
        <input id="search" type="text" onChange={textHandler} />
        <span>
          <button>Search</button>
        </span>
      </div>
    </>
  );
}

export default SearchBar;
