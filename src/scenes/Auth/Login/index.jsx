import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "./index.scss";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

const Login = props => {
  const classes = useStyles();

  const [inputValues, setInputValues] = React.useState({
    login: "",
    password: "",
    remember: false,
  });

  const handleSubmit = evt => {
    evt.preventDefault();

    props.history.push("/cabinet");
  };

  const handleChange = inputType => evt =>
    setInputValues({ ...inputValues, [inputType]: evt.target.value });

  return (
    <div>
      <div className={`${classes.root} block-authorization-root`}>
        <Grid container justify="center">
          <Grid item xs={4}>
            <form autoComplete="off" onSubmit={handleSubmit}>
              <div className="block-authorization">
                <div className="block-authorization__inner">
                  <div className="block-authorization__group">
                    <TextField
                      id="outlined-authorization__input-login"
                      label="Логин"
                      className={classes.textField}
                      value={inputValues.name}
                      onChange={handleChange("login")}
                      margin="normal"
                      width="100%"
                      required="true"
                      variant="outlined"
                    />
                  </div>
                  <div className="block-authorization__group">
                    <TextField
                      id="outlined-authorization__input-password"
                      label="Пароль"
                      className={classes.TextField}
                      value={inputValues.password}
                      onChange={handleChange("password")}
                      margin="normal"
                      type="password"
                      required="true"
                      width="100%"
                      variant="outlined"
                    />
                  </div>
                  <div className="block-authorization__submit">
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      Войти
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

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Login),
);
