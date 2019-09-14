import React from "react";
import Grid from "@material-ui/core/Grid";
import "./index.scss";

const TransactionItem = props => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} className="organization-transaction-item">
      <div className="organization-transaction-item__inner">
        <div className="organization-transaction-item__title">Заказ сайта от Иванова</div>
        <div className="organization-transaction-item__summary">
          <span>Общая сумма</span>
          <div className="organization-transaction-item__summary__value">100,000 руб</div>
        </div>
        <div className="organization-transaction-item__status">
          <span className="active">В работе</span>
        </div>
      </div>
    </Grid>
  );
};

export default TransactionItem;
