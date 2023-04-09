import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export const BlogListComponent = () => {
  return (
    <div className="blog">
      <div className="blog-head">
        <p className="blog-title">Latest Articles</p>
        <a href="" className="blog-nav">
          All articles <MdKeyboardDoubleArrowRight size={25} />
        </a>
      </div>
      <div className="blog-list">
        <ul>
          <li>
            <a href="#">Why Every Developer Should Start Blogging</a>
            <p>September 08, 2019</p>
          </li>
          <li>
            <a href="#">
              The Developer&apos;s Guide to achieving Deep Work for Focus &
              Productivity
            </a>
            <p>September 08, 2019</p>
          </li>
          <li>
            <a href="#">I had a dream, but bugs were in the way</a>
            <p>September 08, 2019</p>
          </li>
          <li>
            <a href="#">Why Every Developer Should Start Blogging</a>
            <p>September 08, 2019</p>
          </li>
          <li>
            <a href="#">
              The Developer&apos;s Guide to achieving Deep Work for Focus &
              Productivity
            </a>
            <p>September 08, 2019</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
