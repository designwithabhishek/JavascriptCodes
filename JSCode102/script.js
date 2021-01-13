const searchHistory = new Set();
function handleSearch(event) {
  if (event.code == "Enter") {
    const { value } = event.target;
    searchHistory.add(value.trim().toLowerCase());
    console.log(searchHistory);
  }
}
