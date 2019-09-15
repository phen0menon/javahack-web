import React from "react";
import Grid from "@material-ui/core/Grid";
import { transactionStatus } from "../../util";
import "./index.scss";

const TransactionItem = props => {
  const { data } = props;

  const handleClick = () => {
    console.log("qwerty");
  };

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      className="organization-transaction-item"
      onClick={handleClick}
    >
      <div className="organization-transaction-item__inner">
        <div className="organization-transaction-item__title">{data.memo}</div>
        <div className="organization-transaction-item__summary">
          <span>Общая сумма</span>
          <div className="organization-transaction-item__summary__value">
            {data.targetPrice} руб
          </div>
        </div>
        <div className="organization-transaction-item__status">
          <span className="active">{transactionStatus[data.status]}</span>
        </div>
      </div>
    </Grid>
  );
};

export default TransactionItem;
