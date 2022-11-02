const Event = ({ name, url, place, dates, image }) => {
    const venue = place[0];
    const date = dates;
    
    return (
      <div className="eventCard">
        <p className="city">{venue.city.name}</p>
        <p className="date">{date}</p>
        <img src={image} alt="event's poster" className="eventImg"></img>
        <h3 className="attractionName">{name}</h3>
        <a href={url} target="_blank" className="moreInfo">
          More info
        </a>
      </div>
    );
  };
  
  export default Event;
  