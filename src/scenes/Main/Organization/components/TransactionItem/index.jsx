import React from "react";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { ReactComponent as IconShare } from "#/assets/img/icon-share.svg";
import { transactionStatus } from "../../util";
import "./index.scss";

const TransactionItem = props => {
  const { data } = props;

  const [checked, setChecked] = React.useState(
    data.status === "CHECKED" || data.status === "FINALIZED",
  );
  const [fetching, setFetching] = React.useState(false);

  const checkedHandler = evt => {
    setChecked(!checked);
    setFetching(true);

    props.sendCheckedUrl(data.id, evt.target.checked, () => {
      setChecked(false);
    });

    setFetching(false);
  };

  const handleShareClick = e => {};

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} className="organization-transaction-item">
      <div className="organization-transaction-item__inner">
        <div className="organization-transaction-item__title">
          <div>{data.memo}</div>
          {data.status === "CREATED" && (
            <div className="organization-transaction-item__share-button" onClick={handleShareClick}>
              <IconShare />
            </div>
          )}
        </div>
        <div className="organization-transaction-item__summary">
          <span>Общая сумма</span>
          <div className="organization-transaction-item__summary__value">
            {data.targetPrice} руб
          </div>
        </div>
        <div className="organization-transaction-item__status">
          <div className="active organization-transaction-item__status-block">
            {transactionStatus[data.status]}
          </div>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={checkedHandler}
                  value="Не выполнено"
                  color="primary"
                  disabled={fetching || data.status === "FINALIZED"}
                />
              }
            />
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default TransactionItem;
