import * as React from "react";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const ms = { fontWeight: 400, fontFamily: "'Montserrat', sans-serif" };
const gm = { fontWeight: 400, fontFamily: "'Cormorant Garamond', serif" };
const rb = { fontWeight: 400, fontFamily: "'Roboto', sans-serif" };
const ic = { fontWeight: 400, fontFamily: "'Inconsolata', monospace" };
const os = { fontFamily: "'Open Sans', sans-serif" };
const sm = { fontFamily: "'Syne Mono', sans-serif" };
// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Congratulations
        <br />
        <span>— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <h2 style={rb}>Roboto</h2>
      <h2 style={gm}>Garamond</h2>
      <h2 style={ms}>Montserrat</h2>
      <h2 style={ic}>Inconsolata</h2>
      <p style={os}>Open Sans</p>
      <p style={sm}>Syne Mono</p>
    </main>
  );
};

export default IndexPage;
