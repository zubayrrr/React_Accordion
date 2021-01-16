import React from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <main>
      <div className="container">
        <h3>Questions about Logging in.</h3>
        <section className="info">
          {data.map((question) => (
            <SingleQuestion
              title={question.title}
              key={question.id}
              info={question.info}
            />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;
