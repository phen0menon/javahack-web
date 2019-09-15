import React, { useEffect } from "react";
import TransactionItem from "./components/TransactionItem";
import AddTransactionModal from "./components/AddTransactionModal";
import FinishTransactionModal from "./components/FinishTransactionModal";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import "./index.scss";
import { getTransactions, createTransaction } from "#/engine/actions/transactions";

const Organization = props => {
  const [modals, setModals] = React.useState({
    addModal: false,
    finishModal: false,
  });

  useEffect(() => {
    props.getTransactions();
  }, []);

  const [finishModalData, setFinishModalData] = React.useState({});

  const toggleModal = modal => evt => {
    setModals({ ...modals, [modal]: !modals[modal] });
  };

  const closeModal = modal => evt => {
    setModals({ ...modals, [modal]: false });
  };

  const renderedTransactions = props.transactions.map((transaction, key) => (
    <TransactionItem onClick={setFinishModalData} data={transaction} />
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
        createTransaction={createTransaction}
      />
      <FinishTransactionModal
        isOpen={modals["finishModal"]}
        handleClose={closeModal("finishModal")}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  transactions: state.transactions.data,
});

const mapDispatchToProps = {
  getTransactions,
  createTransaction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Organization);
