import axios from "axios";
import { useEffect, useState } from "react";
import Event from "./Event";

function DisplayEvents({ sort, search }) {
  const [events, setEvents] = useState([]);

  // API CALL - first render
  useEffect(() => {
    console.log(sort);
    axios({
      url: `https://app.ticketmaster.com/discovery/v2/events?apikey=ssi7z7zAxXhwJbRzJY0OsBa6P0feF23r&locale=*&startDateTime=2022-10-30T15:38:00Z&endDateTime=2023-10-31T15:38:00Z&countryCode=CA`,
      method: "GET",
      dataResponse: "json",
      params: {
        keyword: search,
        city: sort,
      },
    }).then((res) => {
      setEvents(res?.data?._embedded?.events);
      console.log(res?.data?._embedded?.events);
    });
  }, [sort, search]);

  return (
    <section className="mainContainer wrapper">
      <div className="upcomingEvents">
        <h2>Upcoming events:</h2>
      </div>
      <div className="eventsContainer">
        {events?.length &&
          events.map(({ id, name, url, _embedded, dates, images }) => {
            return (
              <Event
                key={id}
                name={name}
                url={url}
                place={_embedded?.venues}
                dates={dates?.start?.localDate}
                image={images[4].url}
              ></Event>
            );
          })}
      </div>
    </section>
  );
}

export default DisplayEvents;
