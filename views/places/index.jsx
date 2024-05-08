const React = require('react');
const Def = require('../default');

function PlacesIndex({ places }) {
  return (
    <Def>
      <main>
        <h1>Places</h1>
        <div className="places-list">
          {places.map((place, index) => (
            <div key={index} className="place">
              <h2>{place.name}</h2>
              <p>City: {place.city}</p>
              <p>State: {place.state}</p>
              <p>Cuisines: {place.cuisines}</p>
              <img src={place.pic} alt={place.name} />
            </div>
          ))}
        </div>
      </main>
    </Def>
  );
}

module.exports = PlacesIndex;
