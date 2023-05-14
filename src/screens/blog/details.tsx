import React from "react";
import ReactMarkdown from "react-markdown";
import { FooterComponent } from "../../components/footer-component";
import { HeaderComponent } from "../../components/header-component";

function Details() {
  const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`;

  return (
    <div>
      <HeaderComponent />

      <div className="blog">
        <div className="blog-list">
          <h2 className="title">React component to render markdown.</h2>
          <p className="time">08 September 2019 | 08:00</p>
          <div className="description">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}

export default Details;
