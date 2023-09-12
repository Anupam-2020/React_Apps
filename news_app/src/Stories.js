/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { NewsContext } from "./context";
import "./Stories.css";

const Stories = () => {
  // let isLoading = true;
  const news = useContext(NewsContext);

  const removeNews = (id) => {
    const removeId = news.hits.filter((tech_news) => {
      return tech_news.objectID !== id;
    })
    // console.log(removeId[0].title)
    news.dispatch({
      type: "REMOVE_NEWS",
      payload: removeId
    })
  }

  return (
    <div>
      {news.isLoading ? (
        <p>Loading...</p>
      ) : (
        news.hits.map((tech_news, index) => {
          return (
            <section className="stories" key={tech_news.objectID}>
              <h2 key={index}>{tech_news.title}</h2>
              <p>By {tech_news.author} | {tech_news.num_comments} comments</p>
              <div className="extras">
                <a href={tech_news.url} target="_blank" rel="noreferrer" className="read-more">
                  Read More
                </a>
                <a href="#" className="remove" onClick={() => removeNews(tech_news.objectID)}>Remove</a>
              </div>
            </section>
          );
        })
      )}
    </div>
  );
};

export default Stories;
