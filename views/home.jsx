const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
        <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/style.css"/>
        </head>
          <main>
              <h1>HOME</h1>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
              <div>
                <img src="/images/anh-nguyen-kcA-c3f_3FE-unsplash.jpg" alt="Bibimbap image" />
                <div>
                  Photo by <a href="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">Anh Nguyen</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                </div>
              </div>
          </main>
      </Def>
    )
  }  

module.exports = home


