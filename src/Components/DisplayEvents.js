import axios from "axios";
import { useEffect, useState } from "react";
import Event from "./Event";

function DisplayEvents({ city, search }) {
  const [events, setEvents] = useState([]);

  // API CALL - first render
  useEffect(() => {
    let selectorParams = {};
    if (city === 'date,asc') {
      selectorParams = {
        keyword: search,
        sort: 'date,asc',
      }
    } else {
      console.log('code is here', city);
        selectorParams = {
          keyword: search,
          sort: 'date,asc',
          city: city
        }
      }
  
    axios({
      url: `https://app.ticketmaster.com/discovery/v2/events?apikey=ssi7z7zAxXhwJbRzJY0OsBa6P0feF23r&locale=*&startDateTime=2022-10-30T15:38:00Z&endDateTime=2023-10-31T15:38:00Z&countryCode=CA`,
      method: "GET",
      dataResponse: "json",
      params: selectorParams
    }).then((res) => {
      setEvents(res?.data?._embedded?.events);
    });
  }, [city, search]);

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
