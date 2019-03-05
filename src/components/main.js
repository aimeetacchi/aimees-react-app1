import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import Weather from './weather';

const Container = styled.div`
    padding: 4em;
    text-align: center;
    color: #1E2022;
    background: #C9D6DF;
    `;

class Main extends Component {
    constructor(){
        super();

        this.state = {
            statusText: '',
            lat: 0,
            long: 0,
            town: '',
            country: '',
            main: {},
            wind: {},
            weather: [],
            foundLocation: false,
        }
        
    }

    componentDidMount(){

        // let options = {
        //     enableHighAccuracy: true,
        //     timeout: 5000,
        //   };
          
          const success = (pos) => {
            let crd = pos.coords;

            this.setState({
                foundLocation: true,
                long: crd.longitude,
                lat: crd.latitude,
            });

            this.setState({
                statusText: `Successfully found you at ${this.state.lat},${this.state.long}`
            });


            const {long, lat} = this.state;
            axios.get("https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+long)
                .then((res) => {
                    console.log(res.data);
                    
                    this.setState({
                        main: res.data.main,
                        town: res.data.name,
                        country: res.data.sys.country,
                        wind: res.data.wind,
                        weather: res.data.weather,
                    });
                       
                })
                .catch((error) => {
                    console.log(error);
                });
          }
          
           const error = (err) => {
            console.warn(`ERROR(${err.code}): ${err.message}`);
          }

        if (!navigator.geolocation){
            this.setState(
                {statusText: 'Your browser does not support geolocation...'}
                );
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }


            

        } // End of componentdidmount
        
    
  render() {
        let weatherText;

        if(this.state.foundLocation) {
            weatherText = this.state.statusText;
        } else {
            weatherText = 'Getting the GPS....';
        }

      return (
        <Container>
            <div className="weatherApp">
            <h2>Weather info will display here</h2>
            <p>{weatherText}</p>
            <Weather data={this.state} />
            </div>
        </Container>  
      )
         
  }
}
export default Main;