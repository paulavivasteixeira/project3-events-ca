import { useState } from "react";

function UserForm(props) {
  const [city, setCity] = useState("placeholder");
  const handleSortBy = (e) => {
    props.getOptions(e.target.value);
    setCity(e.target.value);
  };

  return (
    <form>
      <select
        name="userSelection"
        id="userSelection"
        onChange={handleSortBy}
        value={city}
      >
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
