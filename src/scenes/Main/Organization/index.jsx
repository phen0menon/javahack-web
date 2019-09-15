import React, { useEffect } from "react";
import TransactionItem from "./components/TransactionItem";
import AddTransactionModal from "./components/AddTransactionModal";
import {
  getTransactions,
  createTransaction,
  changeTransaction,
} from "#/engine/actions/transactions";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { postRequest } from "#/agent";
import apiRoutes from "#/routes/api";
import _ from "lodash";
import "./index.scss";

const Organization = props => {
  const [modals, setModals] = React.useState({
    addModal: false,
    finishModal: false,
  });

  useEffect(() => {
    props.getTransactions();
  }, []);

  const toggleModal = modal => evt => {
    setModals({ ...modals, [modal]: !modals[modal] });
  };

  const closeModal = modal => evt => {
    setModals({ ...modals, [modal]: false });
  };

  const sendCheckedUrl = (id, checked, errorsCallback) => {
    postRequest(apiRoutes.checkTransfer(id, checked))
      .then(json => {
        if (_.isEmpty(json)) {
          alert("Денег нет!");
          errorsCallback();
        } else {
          changeTransaction(json.id, json);
        }
      })
      .catch(err => {
        alert("Ошибочка");
        errorsCallback();
      });
  };

  const renderedTransactions = props.transactions.map((transaction, key) => (
    <TransactionItem data={transaction} sendCheckedUrl={sendCheckedUrl} />
  ));

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
          <button type="button" className="button-rf" onClick={toggleModal("addModal")}>
            Создать новую сделку
          </button>
        </div>
      </Grid>

      <Grid container spacing={2} className="main-scene-screen__content">
        {renderedTransactions}
      </Grid>

      <AddTransactionModal
        isOpen={modals["addModal"]}
        handleClose={closeModal("addModal")}
        createTransaction={props.createTransaction}
      />
      {/* <ShareTransactionUrl
        isOpen={modals["shareModal"]}
        handleClose={closeModal("shareModal")}
        currentId={currentTransactionId}
      /> */}
    </div>
  );
};

const mapStateToProps = state => ({
  transactions: state.transactions.data,
});

const mapDispatchToProps = {
  getTransactions,
  createTransaction,
  changeTransaction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Organization);
