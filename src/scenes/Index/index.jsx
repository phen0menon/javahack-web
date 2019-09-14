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

const Index = props => {
  const classes = useStyles();

  const [inputValues, setInputValues] = React.useState({
    login: "",
    password: "",
    remember: false,
  });

  const handleChange = inputType => e =>
    setInputValues({ ...inputValues, [inputType]: e.target.value });

  return (
    <div>
      <div className={`${classes.root} block-authorization-root`}>
        <Grid container xs={12} justify="center">
          <Grid container xs={6} justify="center">
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
                    variant="outlined"
                  />
                </div>
                <div className="block-authorization__submit">
                  <Button variant="outlined" color="primary" className={classes.button}>
                    Войти
                  </Button>
                </div>
              </div>
            </div>
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
  )(Index),
);
