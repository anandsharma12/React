import React from "react";
import "../styles/footer.scss";
const Footer = () => {
  return (
    <footer>
      <div>
        <h1>AnandSharma</h1>
        <p>@all right reserved</p>
      </div>

      <div>
        <h5>Follow Us</h5>
        <div>
          <a href="https://www.youtube.com/" target={"blank"}>
            Youtube
          </a>
          <a href="https://www.instagram.com/" target={"blank"}>
            Instagram
          </a>
          <a href="https://github.com/" target={"blank"}>
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
