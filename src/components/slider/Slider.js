import React, { Component } from 'react'
import './index.css'

class Slider extends Component {


  render() {

    return (
      <div className="bitterness-wrapper">
        <input onChange={this.props.onSlide} id="bitterSlider" type="range" min="0" max="100" step="1"/>
      </div>
    )

  }

}

export default Slider
