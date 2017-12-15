import React, { Component } from 'react';
import './App.css';
import HotelCard from './components/hotelCard/hotelCard';
import sampleHotels from './sampleHotels.js';

class App extends Component {
  constructor() {
    super();
    this.renderHotel = this.renderHotel.bind(this);
    this.state = {
			hotels: {}
		}
  }

  componentWillMount() {
    this.setState({
			hotels: sampleHotels
		});
  }

  renderHotel(key) {
		const hotel = this.state.hotels[key];
		return (
			<HotelCard
				address={hotel.address}
				city={hotel.city}
        image={hotel.image}
        name={hotel.name}
        order={hotel.order}
        spiritCode={hotel.spiritCode}
				state={hotel.state}
        zip={hotel.zip}
			/>
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Alex's Hotels</h1>
        <div className="HotelCards">
  			    {Object.keys(this.state.hotels).map(this.renderHotel)}
        </div>
      </div>
    );
  }
}

export default App;
