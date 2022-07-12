import React, { Component } from "react";
import { connect } from "react-redux";

class DanhSachGhe extends Component {
  renderTableList = () => {
    return this.props.listGhe.map((ele) => {
      return (
        <tr key={ele.soGhe}>
          <td style={{ border: "1px solid", padding: "0.5em 1em" }}>
            {ele.soGhe}
          </td>
          <td style={{ border: "1px solid", padding: "0.5em 1em" }}>
            {ele.gia}
          </td>
          <td style={{ border: "1px solid", padding: "0.5em 1em" }}>
            <button
              onClick={() => {
                this.props.DeleteGhe(ele);
              }}
              className="btn btn-danger"
            >
              Hủy
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <div style={{ padding: "2em" }}>
          <h3>Danh sách ghế bạn chọn</h3>
          <div style={{ display: "flex" }}>
            <div
              style={{
                border: "3px solid orange",
                backgroundColor: "green",
                width: "45px",
                height: "35px",
                fontSize: "12px",
                marginLeft: "2%",
                marginBottom: "1%",
                borderRadius: "5px",
              }}
            ></div>
            <p style={{ paddingLeft: "1em" }}>Ghế đang chọn</p>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                border: "3px solid orange",
                backgroundColor: "orange",
                width: "45px",
                height: "35px",
                fontSize: "12px",
                marginLeft: "2%",
                marginBottom: "1%",
                borderRadius: "5px",
              }}
            ></div>
            <p style={{ paddingLeft: "1em" }}>Ghế đã chọn</p>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                border: "3px solid orange",
                width: "45px",
                height: "35px",
                fontSize: "12px",
                marginLeft: "2%",
                marginBottom: "1%",
                borderRadius: "5px",
              }}
            ></div>
            <p style={{ paddingLeft: "1em" }}>Ghế chưa chọn</p>
          </div>
          <div style={{ marginLeft: "30px" }}>
            <table style={{ border: "1px solid", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ border: "1px solid", padding: "1em" }}>
                    Số ghế
                  </th>
                  <th style={{ border: "1px solid", padding: "1em" }}>Giá</th>
                  <th style={{ border: "1px solid", padding: "1em" }}>Hủy</th>
                </tr>
              </thead>
              <tbody>{this.renderTableList()}</tbody>
            </table>
          </div>
          <div>
            <button>Xác nhận</button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    ...state.bookingReducers,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    DeleteGhe: (type) => {
      dispatch({
        type: "DELETE_SEAT",
        payload: type,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DanhSachGhe);
