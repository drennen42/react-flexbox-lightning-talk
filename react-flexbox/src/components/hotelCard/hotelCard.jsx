import React, { Component } from 'react';
import './hotelCard.css';

class HotelCard extends Component {

	render() {
		const details = {...this.props},
			image = (!!details.image) ? details.image : "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/02/13/1236/Hyatt-Regency-Green-Bay-P046-Standard-Two-Queens-Bedroom.jpg/Hyatt-Regency-Green-Bay-P046-Standard-Two-Queens-Bedroom.4x3.jpg";

		return (
			<div className="HotelCard" style={{order: details.order}}>
				<a href={details.url}><img className="Hotel-image" src={image} alt={details.name} /></a>
				<div className="Hotel-title">{details.name}</div>
				<div className="Hotel-address">{details.address}, {details.city}
					<br/>
					{details.state} {details.zip}
				</div>
				<div className="Home-footer">
				</div>
			</div>
		);
	}
}

export default HotelCard;
