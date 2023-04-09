import React, { Component } from "react";

export class ContactSection extends Component {
  render() {
    return (
      <div className="about-content">
        <p className="about-label">🤩 Let&apos;s Connect</p>
        <p className="about-description">
          - Email: dayatznur@gmail.com
          <br />-{" "}
          <a href="https://www.linkedin.com/in/m-nur-hidayat-51480210a/">
            Linkedin
          </a>
          <br />
          - WhatsApp: 085697746869
          <br />- Telegram: @m_n_hidayat
          <br />- <a href="https://github.com/hidayat-nur">Github</a>
        </p>
      </div>
    );
  }
}

export default ContactSection;
