import React, { Component } from 'react'
import {geolocated} from 'react-geolocated';
import styled from 'styled-components'
import axios from 'axios';

let callAPI;
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
            lat: '',
            long: '',
        }
        
    }

  ç
    componentWillMount(){

        callAPI = (state) => {
            const {long, lat} = state;
            axios.get("https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+long)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        
    }

    getLocation = () => {
        this.setState({
            lat: this.props.coords.latitude,
            long: this.props.coords.longitude
        })
        console.log(this.state);
    }

    getWeather = () => {
      callAPI(this.state);
    }
    

  render() {

        return !this.props.isGeolocationAvailable
        ? <div>Your browser does not support Geolocation</div>
        : !this.props.isGeolocationEnabled
          ? <div>Geolocation is not enabled</div>
          : this.props.coords
            ? <Container>
                <table>
                <tbody>
                <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
                <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
                </tbody>
                </table>
            <button onClick={this.getLocation}> Get Location </button>
            <button onClick={this.getWeather}>Get My Weather </button>
            </Container>
            : <div>Getting the location data&hellip; </div>;
  }
}
export default geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })(Main);