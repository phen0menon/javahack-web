import React from "react";
import Grid from "@material-ui/core/Grid";

const Settings = props => {
  const [toggleSettings, setToggleSettings] = React.useState(false);

  return (
    <div className="main-scene-screen settings-screen">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className="main-scene-screen__topbar"
      >
        <h1 className="main-scene-screen__topbar__title">Настройки</h1>
      </Grid>
    </div>
  );
};

export default Settings;
