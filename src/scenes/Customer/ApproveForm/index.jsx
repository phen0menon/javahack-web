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
import { postRequest } from "#/agent";
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

const Customer = props => {
  const classes = useStyles();

  const [email, setEmail] = React.useState("");
  const [fetching, setFetching] = React.useState(false);

  const { token, accountId } = queryString.parse(props.location.search);

  const sendPutEmailRequest = () => {
    postRequest(apiRoutes.putEmail, { email, token })
      .then(() => {
        sendAddMoneyRequest();
      })
      .then(() => {
        setFetching(false);
      });
  };

  const sendAddMoneyRequest = () => {
    postRequest(apiRoutes.addMoney(accountId), { money: 228322777, safeTransfer: true })
      .then(() => {
        setFetching(false);
        alert("Успешно!");
      })
      .catch(err => {
        alert("Провал!");
      });
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    setFetching(true);

    sendPutEmailRequest();
  };

  const handleChange = evt => setEmail(evt.target.value);

  return (
    <div>
      <div className={`${classes.root} block-authorization-root`}>
        <Grid container justify="center">
          <Grid
            item
            xs={4}
            className={`block-authorization-root__box ${
              fetching ? "block-authorization-root__box__fetching" : ""
            }`}
          >
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className="block-authorization">
                <div className="block-authorization__inner">
                  <div className="block-authorization__group" style={{ margin: "10px 0" }}>
                    <Logo />
                  </div>
                  <div className="block-authorization__group">
                    <h3 className={classes.approveFormTitle}>Подтвердите участие в сделке</h3>
                  </div>
                  <div className="block-authorization__group">
                    <p>Введите адрес эл. почты, чтобы продолжить</p>
                  </div>
                  <div className="block-authorization__group">
                    <TextField
                      id="outlined-authorization__input-login"
                      label="Email"
                      value={email}
                      onChange={handleChange}
                      margin="none"
                      width="100%"
                      required
                      type="email"
                      variant="outlined"
                      className="outlined-input-rf"
                      disabled={fetching}
                    />
                  </div>
                  <div className="block-authorization__submit">
                    <Button
                      type="submit"
                      variant="contained"
                      className="button-rf button-rf__strict"
                      disabled={fetching}
                    >
                      <span>Продолжить</span>
                    </Button>
                  </div>
                </div>
              </div>
            </form>
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
  )(Customer),
);
