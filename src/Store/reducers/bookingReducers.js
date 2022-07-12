import dataBooking from "../../Data/danhSachGhe.json";

const DEFAULT_STATE = {
  selectedSeat: "",
  data: dataBooking,
  listGhe: [],
};

export const bookingReducers = (state = DEFAULT_STATE, { type, payload }) => {
  // console.log(state.listGhe);
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
    case "DELETE_SEAT": {
      const dataSeat = [...state.listGhe];
      const indx = dataSeat.findIndex((ele) => ele.soGhe === payload.soGhe);
      // console.log(indx);
      dataSeat.splice(indx, 1);
      state.listGhe = dataSeat;
      return { ...state };
    }
    default:
      return state;
  }
};
