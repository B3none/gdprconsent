import React from "react";
import Header from "./header";
import Service from "../service";

const userConfig = window.gdprconsent || {};
const userServices = userConfig.services || [];

const styles = {
  sidebar: {
    width: "300px",
    height: "100%",
    background: userConfig.sidebarBackground || "rgb(33, 37, 41)"
  },
  serviceTitle: {
    display: "block",
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

  const services = [];

  for (let i = 0; i < userServices.length; i++) {
    services.push(
      <div style={styles.divider} />
    );

    services.push(
      <Service {...userServices[i]} />
    );
  }

  return (
    <Header title="GDPR Consent Settings" style={style}>
      <div style={styles.content}>
        <p style={styles.sidebarDescription}>
          This is the panel where you've got complete control to decide who we do and don't send your data to.
        </p>
        {services}
      </div>
    </Header>
  );
};

export default Content;