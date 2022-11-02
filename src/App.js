import { useState } from "react";
import "./Styles/sass/styles.scss";
// Sections Components
import Header from "./Components/Header";
import DisplayEvents from "./Components/DisplayEvents";
import Footer from "./Components/Footer";
import UserForm from "./Components/UserForm";

function App() {
  const [sort, setSort] = useState("date,asc");
  const [search, setSearch] = useState("");

  const getOptions = (userOption) => {
    setSort(userOption);
  };

  return (
    <div className="App">
      {/* HEADER SECTION */}
      <Header />

      {/* MAIN SECTION */}
      <main className="appMain wrapper">
        <section className="topMain">
          <div className="searchSection">
            <UserForm getOptions={getOptions} />

            <div className="searchContainer">  
              <input
                id="name"
                name="search"
                value={search}
                placeholder="Enter an attraction's name"
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="searchIcon"></div>
            </div>
          </div>
        </section>
        <DisplayEvents sort={sort} search={search} />
      </main>

      {/* FOOTER SECTION */}
      <Footer />
    </div>
  );
}

export default App;

