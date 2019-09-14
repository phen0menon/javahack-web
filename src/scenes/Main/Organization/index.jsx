import React from "react";
import TransactionItem from "./components/TransactionItem";
import Grid from "@material-ui/core/Grid";
import "./index.scss";

const Organization = props => {
  return (
    <div className="main-scene-screen organization-screen">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className="main-scene-screen__topbar"
      >
        <h1 className="main-scene-screen__topbar__title">Моя деятельность</h1>
        <div className="main-scene-screen__topbar__buttons">
          <button type="button" className="button-rf">
            Создать новую сделку
          </button>
        </div>
      </Grid>
      <Grid container spacing={2} className="main-scene-screen__content">
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
      </Grid>
    </div>
  );
};

export default Organization;
