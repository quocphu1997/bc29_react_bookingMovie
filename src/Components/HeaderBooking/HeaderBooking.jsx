import React, { Component } from "react";

export default class HeaderBooking extends Component {
  render() {
    return (
      <div>
        <h1>Đặt vé xem phim Cyberlearn.vn</h1>

        <div
          style={{
            margin: "auto",
            borderBottom: "30px solid #d3393b ",
            borderLeft: "25px solid transparent",
            borderRight: "25px solid transparent",
            height: 0,
            width: "1000px",
          }}
        >
          <p style={{padding:"0.2em",fontWeight:"500",color:"white"}}>Màn hình</p>
        </div>
      </div>
    );
  }
}
