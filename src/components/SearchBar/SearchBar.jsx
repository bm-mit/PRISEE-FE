import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="me-3 sc-container">
      <input
        type="input"
        placeholder="Search"
        className="border-0 form-control mb-3 smoothCaretInput"
        id="search-bar"
        data-sc=""
      />
    </div>
  );
}
