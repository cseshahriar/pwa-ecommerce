import React, { Component } from "react";

class SliderLoading extends Component {
  render() {

    let isLoading = this.props.isLoading;

    return (
      <div className={isLoading}>
        <div className="row">
          {/* desktop mega menu */}
          <div className="col-3">
            <div className="ph-row">
              <div className="ph-col-12"></div>
              <div className="ph-col-12"></div>
              <div className="ph-col-12"></div>
              <div className="ph-col-12"></div>
              <div className="ph-col-12"></div>
              <div className="ph-col-12"></div>
              <div className="ph-col-12"></div>
              <div className="ph-col-12"></div>
            </div>
          </div>

          {/* slider */}
          <div className="col-9">
            <div className="ph-picture"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default SliderLoading;
