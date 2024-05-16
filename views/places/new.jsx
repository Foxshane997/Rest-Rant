const React = require("react");
const Def = require("../default");

function new_form(data) {
  return (
    <Def>
      <main>
        <h1>Add a New Place</h1>
        <form action="/places" method="POST">
          <div className="form-columns">
            <label htmlFor="name">Place Name:</label>
            <input id="name" name="name" required />
          </div>
          <div className="form-columns">
            <label htmlFor="pic">Place Picture:</label>
            <input type="url" id="pic" name="pic" className="input"/>
          </div>
          <div className="form-columns">
            <label htmlFor="city">City:</label>
            <input id="city" name="city" />
          </div>
          <div className="form-columns">
            <label htmlFor="state">State:</label>
            <input id="state" name="state" />
          </div>
          <div className="form-group">
            <label for="founded">Founded Year</label>
            <input 
            type="number"
            className="form-control" 
            id="founded" 
            name="founded"
            value={new Date().getFullYear()} />
          </div>
          <div className="form-columns">
            <label htmlFor="cuisines">Cuisines:</label>
            <input id="cuisines" name="cuisines" required />
          </div>
          <input
            type="submit"
            value="Add Place"
            className="btn"
          />
        </form>
      </main>
    </Def>
  );
}

module.exports = new_form 