
import dataBooking from "../../Data/danhSachGhe.json";

const DEFAULT_STATE = {
  selectedSeat: dataBooking,
};

export const bookingReducers = (state = DEFAULT_STATE, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case "SELECTED_SEAT": {
      state.selectedSeat = payload;
      return { ...state };
    }
    default:
      return state;
  }
};
