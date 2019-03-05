import React, { Component } from 'react'




class Weather extends Component {
  constructor(props){
    super(props);
    this.state = {
      isToggleOn: true,
    }
  }
  render() {
    const icon = this.props.data.weather.map((data, i)=> {
      return data.icon;
    })

    console.log(this.props.data)
    const {town, country, foundLocation } = this.props.data;
    const {temp, temp_max, temp_min } = this.props.data.main;
    var celsius = Math.floor(temp);
    
    const toFahrenheit = (c) => {
      return ((c * 9) / 5) + 32;
    }
    let fahrenheit = toFahrenheit(celsius);

    const toggleTemp = () => {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }

    return (
      <div>

        {foundLocation ? (
        <React.Fragment>
            <div className="city-name">{town}, {country}</div>
            <div className="city-temp">
              <div className='icon'>
                <img src={icon} alt="icon"/>
              </div>
              <p>
              
              <span className='c'>{celsius}</span>
              <span className='f'>{fahrenheit}</span>
              <span className='tiny' id='c'>°C</span>
              {/* <span className='tiny'> | </span>
              <span className='tiny' id='f'>°F</span> */}
              </p>
              
              
            </div>
          </React.Fragment>
      ) : (
        <div>Getting Data....</div>
      )}
         
       
      </div>
    )
  }
}

export default Weather;
