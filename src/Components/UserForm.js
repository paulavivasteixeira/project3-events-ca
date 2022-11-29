import { useState } from "react";

function UserForm(props) {
  const [cityMenu, setCityMenu] = useState("placeholder");
  const handleSortBy = (e) => {
    props.searchFunction('');
    props.getOptions(e.target.value);
    setCityMenu(e.target.value);
  };

  return (
    <form>
      <label for="sortByCity"></label>
      <select
        name="userSelection"
        id="userSelection"
        onChange={handleSortBy}
        value={cityMenu}
      >
        <label className="sr-only">Choose a city</label>
        <option value="placeholder" disable>
        Choose a City:
        </option>
        <option value="calgary">Calgary</option>
        <option value="mississauga">Mississauga</option>
        <option value="montreal">Montreal</option>
        <option value="ottawa">Ottawa</option>
        <option value="toronto">Toronto</option>
        <option value="quebec">Quebec</option>
        <option value="vancouver">Vancouver</option>
        <option value="winnipeg">Winnipeg</option>
      </select>
    </form>
  );
}

export default UserForm;
