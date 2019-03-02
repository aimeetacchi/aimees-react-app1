import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios';


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
            temp: [],
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
                lat: crd.latitude
            });
            
            this.setState({
                statusText: `Successfully found you at ${this.state.lat},${this.state.long}`
            });


            const {long, lat} = this.state;
            axios.get("https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+long)
                .then((response) => {
                    console.log(response);
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
            navigator.geolocation.getCurrentPosition(success, error, {timeout: 5000,});
        }


            

        } // End of componentdidmount
        
    
  render() {
        let weatherText;

        if(this.state.foundLocation) {
            weatherText = this.state.statusText;
        } else {
            weatherText = this.state.statusText;
        }

      return (
        <Container>
            <div className="weatherApp">
            <h2>Weather info will display here</h2>
            <p>{weatherText}</p>
            </div>
        </Container>  
      )
         
  }
}
export default Main;