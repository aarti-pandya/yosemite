import React from 'react';
import mapboxgl from 'mapbox-gl';
import './Directions.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
mapboxgl.accessToken = 'pk.eyJ1IjoidGVzdHRlc3QzMCIsImEiOiJja2pma29vanMwZ3VhMnlsbzJyZDJ4ZnduIn0.TJnrXmfsBOwQWOcIH7unyA';

class Directions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -120.059727,
      lat: 37.817299,
      zoom: 12
    };
  }

  componentDidMount() {
    var property_name   = "Yosemite Westgate Lodge";
    var property_addres = "7633 State Highway 120";
    var property_city   = "Groveland";
    var property_state  = "California";
    var property_country = "USA";

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving'
    });
    map.addControl(directions, 'top-left');

    var popupProperty = new mapboxgl.Popup({ offset: 25 }).setHTML(
      "<strong>Property Name: </strong>" + property_name+
      "<br/><strong>Location:</strong> " + property_addres+
      "<br/><strong>City:</strong> " + property_city +
      "<br/><strong>State:</strong> " + property_state+
      "<br/><strong>Country:</strong> " +property_country
  );
    var marker = new mapboxgl.Marker()
      .setLngLat([this.state.lng, this.state.lat])
      .setPopup(popupProperty) 
      .addTo(map);

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }

  render() {
    return (
      <div>
        <div className='sidebarStyle'>
          <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
        </div>
        <div ref={el => this.mapContainer = el} className='mapContainer' />
      </div>
    )
  }
}
export default Directions;
