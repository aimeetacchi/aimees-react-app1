import React, { Component } from 'react'




class Weather extends Component {
  render() {
    const icon = this.props.data.weather.map((data, i)=> {
      return data.icon;
    })

    console.log(this.props.data.weather)
    const {town, country } = this.props.data;
    const {temp, temp_max, temp_min } = this.props.data.main;
    
    return (
      <div>
        <div className="city-name">{town}, {country}</div>
        <div className="city-temp"> {temp} <img src={icon} alt="icon"/></div>
      </div>
    )
  }
}

export default Weather;
