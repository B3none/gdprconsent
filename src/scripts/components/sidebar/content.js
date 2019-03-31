import React from "react";
import Header from "./header";

const userConfig = window.gdprconsent || {};

const styles = {
  sidebar: {
    width: "300px",
    height: "100%",
    background: userConfig.sidebarBackground || "rgb(33, 37, 41)"
  },
  sidebarLink: {
    display: "block",
    padding: "16px 0px",
    color: "#757575",
    textDecoration: "none"
  },
  sidebarDescription: {
    margin: 0,
    display: "block",
    color: "#757575",
    textDecoration: "none"
  },
  divider: {
    margin: "8px 0",
    height: 1,
    backgroundColor: "#757575"
  },
  content: {
    padding: "16px",
    height: "100%",
    backgroundColor: "white"
  }
};

const Content = props => {
  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar;

  const links = [];

  for (let i = 0; i < 10; i++) {
    links.push(
      <a key={i} href="#" style={styles.sidebarLink}>
        Mock menu item {i}
      </a>
    );
  }

  return (
    <Header title="GDPR Consent Settings" style={style}>
      <div style={styles.content}>
        <p style={styles.sidebarDescription}>
          This is the panel where you've got complete control to decide who we do and don't send your data to.
        </p>
        <div style={styles.divider} />
        {links}
      </div>
    </Header>
  );
};

export default Content;