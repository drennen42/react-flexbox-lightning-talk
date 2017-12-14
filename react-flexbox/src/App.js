import React, { Component } from 'react';
import './App.css';
import HotelCard from './components/hotelCard/hotelCard';
import sampleHotels from './sampleHotels.js';

class App extends Component {
  constructor() {
    super();
    this.renderHotels = this.renderHotels.bind(this);
    this.state = {
			hotels: {}
		}
  }

  componentWillMount() {
    this.setState({
			hotels: sampleHotels
		})
  }

  renderHotels(key) {
		const hotel = this.state.hotels[key];
		return (
			<HotelCard
				key={key}
				id={key}
				image={hotel.image}
				address={hotel.address}
				city={hotel.city}
				state={hotel.state}
				zip={hotel.zip}
				name={hotel.name}
        order={hotel.order}
			/>
    )
  }

  loadSampleHomes() {
		this.setState({
			hotels: sampleHotels
		})
	}


  render() {
    return (
      <div className="App">
        <h1>Alex's Hotels</h1>
        <div className="HotelCards">
          <div className="HotelCards">
    			     {Object.keys(this.state.hotels).map(this.renderHotels)}
    			</div>
        </div>
      </div>
    );
  }
}

export default App;
