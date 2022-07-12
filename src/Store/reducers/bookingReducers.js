import dataBooking from "../../Data/danhSachGhe.json";

const DEFAULT_STATE = {
  selectedSeat: "A1",
  data: dataBooking,
};

export const bookingReducers = (state = DEFAULT_STATE, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case "SELECTED_SEAT": {
      state.selectedSeat = payload;
      state.data.map((ele) => {
        ele.danhSachGhe.map((seat) => {
          if (seat.soGhe === state.selectedSeat) {
            seat.daDat = true;
          }
        });
      });
      return { ...state };
    }
    default:
      return state;
  }
};
