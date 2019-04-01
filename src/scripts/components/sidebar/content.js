import React from "react";
import Header from "./header";
import Service from "../service";
import Storage from "../../storage";

const storage = new Storage();

const userConfig = window.gdprconsent || {};
const userServices = userConfig.services || [];

const styles = {
  sidebar: {
    width: "300px",
    height: "100%",
    background: userConfig.sidebarBackground || "rgb(33, 37, 41)"
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
    minHeight: "88vh",
    backgroundColor: "white"
  }
};

const Content = (props, isNew) => {
  const acceptInitialSettings = () => {
    storage.update({
      is_new: false,
      accepted: + new Date()
    });

    // A little poor but this can be re-worked at a later date.
    window.location.reload();
  };

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

  if (isNew) {
    services.push(
      <div style={{textAlign: "center"}}>
        <button onClick={acceptInitialSettings} className="gdprconsent-accept">
          Accept settings
        </button>
      </div>
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