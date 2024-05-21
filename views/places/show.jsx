const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
      <h3 className="inactive">
        No comments yet!
      </h3>
    )
    let rating = (
      <h3 className="inactive">
        Not yet rated
      </h3>
    )
    if (data.place.comments.length) {
      let sumRatings = data.place.comments.reduce((tot, c) => {
        return tot + c.stars
      }, 0)
      let averageRating = Math.round(sumRatings / data.place.comments.length)
      let stars = ''
      for (let i = 0; i < averageRating; i++) {
        stars += '⭐️'
      }
      rating = (
        <h3>
          {stars} stars
        </h3>
      )
      comments = data.place.comments.map(c => {
        return (
          <div className="border col-sm-4">
            <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
            <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
              <input type="submit" className="btn btn-danger" value="Delete Comment" />
            </form>
          </div>
        )
      })
    }
    return (
        <Def>
          <main>
            <div className="row">
              <div className="col-sm-6">
                <img src={data.place.pic} alt={data.place.name} />
                <h3>
                  Located in {data.place.city}, {data.place.state}
                </h3>
              </div>
              <div className="col-sm-6">
                <h1>{ data.place.name }</h1>
                <h2>
                  Rating
                </h2>
                {rating}
                <br />
                <h2>
                  Description
                </h2>
                <h3>
                  {data.place.showEstablished()}
                </h3>
                <h4>
                  Serving {data.place.cuisines}
                </h4>
                <br />
                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                  Edit
                </a>{` `}
                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
                </form>
              </div>
            </div>
            <hr />
            <h2>Comments</h2>
            <div className="row">
              {comments}
            </div>
            <hr />
            <h2>Got Your Own Rant or Rave?</h2>
            <form action={`/places/${data.place.id}/comment`} method="POST">
              <div className="row">
                <div className="form-group col-sm-12">
                  <label htmlFor="content">Content</label>
                  <textarea id="content" name="content" className="form-control"></textarea>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-sm-4">
                  <label htmlFor="author">Author</label>
                  <input id="author" name="author" className="form-control" />
                </div>
                <div className="form-group col-sm-4">
                  <label htmlFor="stars">Star Rating</label>
                  <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" className="form-control" />
                </div>
                <div className="form-group col-sm-2">
                  <label htmlFor="rant">Rant?</label>
                  <input type="checkbox" id="rant" name="rant" className="form-control" />
                </div>
              </div>
              <input type="submit" className="btn btn-primary" value="Add Comment" />
            </form>
          </main>
        </Def>
    )
}

module.exports = show

// const React = require("react");
// const Def = require("../default");

// function show(data) {
//     let comments = <h3 className="inactive">No comments yet!!</h3>;
//     if (data.place.comments.length) {
//         comments = data.place.comments.map((c) => {
//             return (
//                 <div className="border" key={c._id}>
//                     <h2 className="rant">{c.rant ? "Rant! 😡" : "Rave! 😻"}</h2>
//                     <h4>{c.content}</h4>
//                     <h3>
//                         <strong>- {c.author}</strong>
//                     </h3>
//                     <h4>Rating: {c.stars}</h4>
//                 </div>
//             );
//         });
//     }
//     return (
//         <Def>
//             <main className="show-main">
//                 <div>
//                     <img src={data.place.pic} alt={data.place.name}></img>
//                     <h3>
//                         Located in {data.place.city}, {data.place.state}
//                     </h3>
//                 </div>
//                 <div>
//                     <h1>{data.place.name}</h1>
//                     <section>
//                         <h2>Rating</h2>
//                         <p>Not Rated</p>
//                     </section>
//                     <section>
//                         <h2>Description</h2>
//                         <h3>{data.place.showEstablished()}</h3>
//                         <h4>Serving {data.place.cuisines}</h4>
//                     </section>
//                     <section>
//                         <h2>Comments</h2>
//                         {comments}
//                     </section>
//                     <div>
//                         <h2>Leave a Review</h2>
//                         <form id="comment-form" action={`/places/${data.place._id}/comment`} method="POST">
//                             <div className="comment-layouts">
//                                 <label htmlFor="author">Author</label>
//                                 <input type="text" name="author" id="author"></input>
//                                 <label htmlFor="content">Content</label>
//                                 <input type="textarea" name="content" id="content"></input>
//                             </div>
//                             <br />
//                             <div className="other-form-layouts">
//                                 <div className="star-rating">
//                                     <label htmlFor="stars">Star Rating</label>
//                                     <br />
//                                     <input type="range" name="stars" min="0" max="5" step="0.5" required></input>
//                                     <br />
//                                     <datalist id="values">
//                                         <option value="0" label="0"></option>
//                                         <option value="1" label="1"></option>
//                                         <option value="2" label="2"></option>
//                                         <option value="3" label="3"></option>
//                                         <option value="4" label="4"></option>
//                                         <option value="5" label="5"></option>
//                                     </datalist>
//                                 </div>
//                                 <div>
//                                     <label htmlFor="rant">Rant</label>
//                                     <br />
//                                     <input type="checkbox" name="rant" id="rant"></input>
//                                 </div>
//                                 <div>
//                                     <button type="submit">Add Comment</button>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </main>
//             <a href={`/places/${data.place._id}/edit`} className="btn btn-warning">
//                 Edit
//             </a>
//             <br />
//             <form method="POST" action={`/places/${data.place._id}?_method=DELETE`}>
//                 <button type="submit" className="btn btn-danger">
//                     Delete
//                 </button>
//             </form>
//         </Def>
//     );
// }

// module.exports = show