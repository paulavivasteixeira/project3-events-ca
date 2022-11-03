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
        <label for="ChooseCity"></label>
        <option value="placeholder" disable>
        Choose a City:
        </option>
        <label for="calgary"></label>
        <option value="calgary">Calgary</option>
        <label for="mississauga"></label>
        <option value="mississauga">Mississauga</option>
        <label for="montreal"></label>
        <option value="montreal">Montreal</option>
        <label for="ottawa"></label>
        <option value="ottawa">Ottawa</option>
        <label for="toronto"></label>
        <option value="toronto">Toronto</option>
        <label for="quebec"></label>
        <option value="quebec">Quebec</option>
        <label for="vancouver"></label>
        <option value="vancouver">Vancouver</option>
        <label for="winnipeg"></label>
        <option value="winnipeg">Winnipeg</option>
      </select>
    </form>
  );
}

export default UserForm;
