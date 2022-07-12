import React, { Component } from "react";
import dataBooking from "../../Data/danhSachGhe.json";
import DanhSachGhe from "./DanhSachGhe/DanhSachGhe";
import { connect } from "react-redux";

class BodyBooking extends Component {
  renderRowNumber = () => {
    // console.log(dataBooking[0]);
    return dataBooking.map((ele) => {
      // console.log("out1", ele);
      if (ele.hang === "") {
        // console.log(ele.danhSachGhe);
        return ele.danhSachGhe.map((NumSeat) => {
          return (
            <th
              style={{
                width: 75,
                height: 35,
                background: "none",
                border: "none",
                marginLeft: "2%",
                marginBottom: "1%",
                fontSize: "30px",
                color: "brown",
              }}
              key={NumSeat.soGhe}
            >
              {NumSeat.soGhe}
            </th>
          );
        });
      }
    });
  };
  renderRow = () => {
    return dataBooking.map((ele, index) => {
      if (ele.hang !== "") {
        return (
          <tr
            style={{
              width: 75,
              height: 35,
              background: "none",
              border: "none",
              marginLeft: "2%",
              marginBottom: "1%",
              fontSize: "30px",
              color: "brown",
            }}
            key={index}
          >
            <td>{ele.hang}</td>

            {ele.danhSachGhe.map((seat) => {
              return (
                <td key={seat.soGhe}>
                  <button
                    onClick={() => {
                      this.props.selectecSeat(seat.soGhe);
                    }}
                    className={`btn ${seat.daDat && "btn-success"}`}
                    style={{
                      border: "3px solid orange",
                      width: "45px",
                      height: "35px",
                      fontSize: "12px",
                      marginLeft: "2%",
                      marginBottom: "1%",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    key={seat.soGhe}
                  >
                    {seat.soGhe}
                  </button>
                </td>
              );
            })}
          </tr>
        );
      }
    });
  };

  render() {
    return (
      <div style={{ padding: "1em" }}>
        <table style={{ margin: "auto" }}>
          <thead>
            <tr>
              <th></th>
              {this.renderRowNumber()}
            </tr>
          </thead>
          <tbody>{this.renderRow()}</tbody>
        </table>
        <DanhSachGhe />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.bookingReducers,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    selectecSeat: (type) => {
      console.log(type);
      dispatch({
        type: "SELECTED_SEAT",
        payload: type,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BodyBooking);
