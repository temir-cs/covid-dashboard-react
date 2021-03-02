import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import { connect } from 'react-redux';
import OptionsButtons from '../options-buttons';
import MapMarker from '../map-marker';
import { WORLD_BOUNDS, DEFAULT_MAP_ZOOM, DATA_TOOLTIPS } from './consts';
import getSpreadSpeedLevel from './utils';
import './map.scss';

const L = require('leaflet');

const renderMap = (containerId) => {
  const worldBounds = L.latLngBounds(WORLD_BOUNDS);
  const map = new L.Map(containerId, {
    center: worldBounds.getCenter(),
    zoom: DEFAULT_MAP_ZOOM,
    minZoom: 2,
    maxBounds: worldBounds,
    maxBoundsViscosity: 0.75,
  });
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '',
    noWrap: false,
  }).addTo(map);
  return map;
};

const renderMapMarkers = (map, markersLayerGroup, countries, currentCriteria) => {
  const countryPointToLayer = (feature, latlng) => {
    const { properties } = feature;
    const countryName = properties.country;
    const data = properties[currentCriteria];
    const level = getSpreadSpeedLevel(properties, countries, currentCriteria);
    const dataTitle = DATA_TOOLTIPS[currentCriteria];
    const marker = L.marker(latlng, {
      icon: L.divIcon({
        className: 'icon',
        html: ReactDOMServer.renderToString(
          <MapMarker data={data} dataTitle={dataTitle} countryName={countryName} level={level} />
        ),
      }),
      riseOnHover: true,
    });
    return marker;
  };

  const geoJson = {
    type: 'FeatureCollection',
    features: countries.map((country) => {
      const { lat, long: lng } = country;
      return {
        type: 'Feature',
        properties: {
          ...country,
        },
        geometry: {
          type: 'Point',
          coordinates: [lng, lat],
        },
      };
    }),
  };
  const geoJsonLayers = new L.GeoJSON(geoJson, {
    pointToLayer: countryPointToLayer,
  });

  markersLayerGroup.clearLayers();
  markersLayerGroup.addLayer(geoJsonLayers).addTo(map);
};

class Map extends Component {
  constructor() {
    super();
    this.state = {
      map: null,
      markersLayerGroup: new L.LayerGroup(),
    };
  }

  componentDidMount() {
    this.setState({
      map: renderMap('map-container'),
    });
  }

  componentDidUpdate(prevProps) {
    const { map, markersLayerGroup } = this.state;
    const { countries, currentCriteria } = this.props;
    if (prevProps !== this.props) {
      renderMapMarkers(map, markersLayerGroup, countries, currentCriteria);
    }
  }

  render() {
    return (
      <div className="content__map">
        <div className="content__map-container" id="map-container"></div>
        <OptionsButtons location="map" />
      </div>
    );
  }
}

const mapStateToProps = ({ loadingCountries, countries, currentCriteria }) => ({
  loadingCountries,
  countries,
  currentCriteria,
});

export default connect(mapStateToProps)(Map);
