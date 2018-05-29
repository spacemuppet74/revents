import { MODAL_CLOSE, MODAL_OPEN } from "./modalConstants";
import { createReducer } from "../../app/common/util/reducerUtil";

const initialState = null;

const openModal = (state, payload) => {
  console.log("open modal");
  const { modalType, modalProps } = payload;
  return {
    modalType,
    modalProps
  };
};

const closeModal = (state, payload) => {
  return null;
};

export default createReducer(initialState, {
  [MODAL_OPEN]: openModal,
  [MODAL_CLOSE]: closeModal
});
