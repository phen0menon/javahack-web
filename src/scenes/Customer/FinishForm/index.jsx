import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as LoginIcon } from "#/assets/img/icon-login.svg";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Logo from "#/components/Logo";
import "#/scenes/Auth/index.scss";
import apiRoutes from "#/routes/api";
import { getRequest } from "#/agent";
import queryString from "query-string";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  approveFormTitle: {
    marginBottom: 0,
    marginTop: 10,
  },
}));

const FinishForm = props => {
  const classes = useStyles();
  const [finished, setfinished] = React.useState(false);
  const { token } = queryString.parse(props.location.search);

  const finishFn = () => {
    getRequest(apiRoutes.finalize(token))
      .then(() => {
        setfinished(true);
      })
      .catch(err => {
        alert("Ошибочка!)");
      });
  };

  return (
    <div>
      <div className={`${classes.root} block-authorization-root`}>
        <Grid container justify="center">
          <Grid item xs={4} className={`block-authorization-root__box`}>
            {finished ? (
              <h3>Спасибо! Сделка завершена и деньги переведены</h3>
            ) : (
              <div className="block-authorization__submit">
                <Button
                  type="submit"
                  variant="contained"
                  className="button-rf button-rf__strict"
                  onClick={finishFn}
                >
                  <span>Завершить сделку и отправить деньги</span>
                </Button>
              </div>
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  // sendMail,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(FinishForm),
);
