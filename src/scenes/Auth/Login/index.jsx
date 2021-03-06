import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { saveToken } from "#/engine/util";
import { ReactComponent as LoginIcon } from "#/assets/img/icon-login.svg";
import { login } from "#/engine/actions/user";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Logo from "#/components/Logo";
import "./index.scss";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  authTitle: {
    marginBottom: 5,
    marginTop: 5,
  },
}));

const Login = props => {
  const classes = useStyles();

  const [inputValues, setInputValues] = React.useState({
    login: "",
    password: "",
    remember: false,
  });

  const [fetching, setFetching] = React.useState(false);

  const handleSubmit = evt => {
    evt.preventDefault();

    const { login, password } = inputValues;

    setFetching(true);

    props
      .login({ login, password })
      .then(json => {
        setFetching(false);
        props.history.push("/cabinet");
      })
      .then(err => {
        setFetching(false);
      });
  };

  const handleChange = inputType => evt =>
    setInputValues({ ...inputValues, [inputType]: evt.target.value });

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
                    <h3 className={classes.authTitle}>Вход в личный кабинет</h3>
                  </div>
                  <div className="block-authorization__group">
                    <TextField
                      id="outlined-authorization__input-login"
                      label="Логин"
                      value={inputValues.name}
                      onChange={handleChange("login")}
                      margin="normal"
                      width="100%"
                      required
                      variant="outlined"
                      className="outlined-input-rf"
                      disabled={fetching}
                    />
                  </div>
                  <div className="block-authorization__group">
                    <TextField
                      id="outlined-authorization__input-password"
                      label="Пароль"
                      value={inputValues.password}
                      onChange={handleChange("password")}
                      margin="normal"
                      type="password"
                      required
                      width="100%"
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
                      <LoginIcon style={{ width: 18, height: 18 }} />
                      <span className="ml-1">Войти</span>
                    </Button>
                  </div>

                  <div className="block-authorization__group__alt">
                    <Link to="/register" className="block-authorization__alt">
                      ИЛИ регистрация нового клиента
                    </Link>
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

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  login,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Login),
);
