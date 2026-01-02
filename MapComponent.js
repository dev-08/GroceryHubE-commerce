import React, { useEffect, useState } from 'react';
import './MapContainer.css';

const StoreMap = () => {
  const [map, setMap] = useState(null);
  const [storeMarkers, setStoreMarkers] = useState([]);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [initialLoc, setInitialLoc] = useState({ lat: 0, long: 0 });
  const [address, setAddress] = useState(''); // Added state for address

  useEffect(() => {
    getLocation();
    const script1 = document.createElement('script');
    script1.src =
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyBXNhSo8nI8vbgBSRDBTBuwxcNXc1gR8zw&libraries=places,geometry';

    script1.async = true;
    script1.defer = true;
    document.head.appendChild(script1);

    script1.onload = () => {
      setMap(new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 41.8781, lng: -87.6298 }, // Chicago as default center
        zoom: 12,
      }));
      setMapLoaded(true);
    };
    

    return () => {
      document.head.removeChild(script1);
    };
  }, []);

  useEffect(() => {
    if (initialLoc.lat !== 0 && initialLoc.long !== 0) {
      fetchNearbyStores(initialLoc.lat, initialLoc.long);
    }
  }, [initialLoc.lat, initialLoc.long, mapLoaded]);

  const fetchNearbyStores = async (latitude, longitude) => {
    try {
      const location = new window.google.maps.LatLng(latitude, longitude);
      const service = new window.google.maps.places.PlacesService(map);

      const request = {
        location: location,
        radius: 5000,
        types: ['grocery_or_supermarket'],
      };

      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          updateMapWithMarkers(results);
        } else {
          console.error('Error fetching nearby stores:', status);
        }
      });
    } catch (error) {
      console.error('Error fetching nearby stores:', error);
    }
  };

  const updateMapWithMarkers = (storeLocations) => {
    // Clear existing markers
    storeMarkers.forEach((marker) => marker.setMap(null));

    // Create new markers for each store
    const newMarkers = storeLocations.map((store) => {
      const marker = new window.google.maps.Marker({
        position: store.geometry.location,
        map: map,
        title: store.name,
      });

      marker.addListener('click', () => {
        const infowindow = new window.google.maps.InfoWindow({
          content: `<strong>${store.name}</strong>`,
        });
        infowindow.open(map, marker);
      });

      return marker;
    });

    // Update the state with new markers
    setStoreMarkers(newMarkers);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert('Geolocation is not supported by the browser.');
    }
  };

  const showPosition = (position) => {
    setInitialLoc({
      lat: position.coords.latitude,
      long: position.coords.longitude,
    });
  };

  const showError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert('User denied the request for Geolocation.');
        break;
      case error.POSITION_UNAVAILABLE:
        alert('Location information is unavailable.');
        break;
      case error.UNKNOWN_ERROR:
        alert('An unknown error occurred.');
        break;
      default:
        break;
    }
  };

  const handleSelectStore = (storeAddress) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: storeAddress }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const location = results[0].geometry.location;
        map.setCenter(location);
        map.setZoom(15);
        fetchNearbyStores(location.lat(), location.lng());
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  };

  const handleSearch = () => {
    if (address && map) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: address }, (results, status) => {
        if (status === 'OK' && results[0]) {
          const location = results[0].geometry.location;
          map.setCenter(location);
          map.setZoom(15);
          fetchNearbyStores(location.lat(), location.lng());
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-2">
          <form>
            <label htmlFor="fname">Select Store:</label>
            <br />
            <button
              id="marianos"
              type="button"
              className="btn btn-success"
              onClick={() => handleSelectStore('1615 S Clark St, Chicago, IL')}
            >
              Mariano's
            </button>
            <br />
            <button
              id="southLoopMarket"
              type="button"
              className="btn btn-success"
              onClick={() => handleSelectStore('1720 S Michigan Ave, Chicago, IL')}
            >
              South Loop Market
            </button>
          </form>
          <br />
          <form>
            <label htmlFor="fname">Stores Near Me</label>
            <br />
            <button
              id="store"
              type="button"
              className="btn btn-success"
              value="0"
              onClick={() => fetchNearbyStores(initialLoc.lat, initialLoc.long)}
            >
              Stores Near Me
            </button>
          </form>
        </div>
        <div className="col-sm-8">
          <div
            className="row mb-2"
            style={{
              display: 'flex',
              textAlign: 'center',
              justifyContent: 'flex-end',
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'nowrap',
            }}
          >
            <div className="col-sm-7 text-center">
              <input
                className="form-control"
                id="ciudad"
                type="text"
                placeholder="Enter your address to locate stores near you..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="col-sm-3">
              <button className="btn btn-primary" onClick={handleSearch}>
                Locate
              </button>
            </div>
          </div>
          <div id="map" style={{ height: '500px', width: '100%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default StoreMap;
