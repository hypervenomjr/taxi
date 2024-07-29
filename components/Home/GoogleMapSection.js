import React, { useContext, useEffect, useState } from 'react'
import { DirectionsRenderer, GoogleMap, MarkerF, OverlayViewF,OverlayView, useJsApiLoader } from '@react-google-maps/api';
import { SourceContext } from '@/context/SourceContext';
import { DestinationContext } from '@/context/DestinationContext';

const containerStyle = {
  width: '100%',
  height: '120%'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function GoogleMapSection() {

  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  // })

  const {source,setSource} = useContext(SourceContext);
  const {destination,setDestination} = useContext(DestinationContext);

  const [center,setCenter] = useState({
    lat: -3.745,
    lng: -38.523
  });
  const [map, setMap] = React.useState(null);
  const [DirectionRoutePoints , setDirectionRoutePoints]= useState([]);

  useEffect(()=>{

    if(source?.length!=[]&& map){
    
      map.panTo({
        lat:source.lat,
        lng:source.lng,
      })
        setCenter({
          lat:source.lat,
          lng:source.lng,
        })
        
        
    }
    if(source.length!=[] && destination.length!= []){
      DirectionRoute();
    }
    
    },[source]);

    useEffect(()=>{

      if(destination?.length!=[]&& map){
      
          setCenter({
            lat:destination.lat,
            lng:destination.lng,
          })
      }
      if(source.length!=[] && destination.length!= []){
        DirectionRoute();
      }
      },[destination]);

      const DirectionRoute = ()=> {

        const DirectionsService = new google.maps.DirectionsService();
      DirectionsService.route({
        origin: {lat: source.lat , lng: source.lng},
        destination: {lat:destination.lat , lng: destination.lng},
        travelMode: google.maps.TravelMode.DRIVING
      },(result , status)=>{
        if(status === google.maps.DirectionsStatus.OK){
            setDirectionRoutePoints(result)
        }
        else{
          console.error("error");
        }
      })

    }



  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return  (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{mapId:'e338d20bc171ed33'}}

      >
          {source!=[]? <MarkerF position={{lat:source.lat , lng: source.lng}}
        >
          <OverlayViewF position={{lat:source.lat , lng: source.lng}} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          > 
          <div className=' p-2 bg-white font-bold inline-block'>
              <p className=' text-black text-l'>
                {source.label}
              </p>
          </div>
          </OverlayViewF>
          
          </MarkerF>:null}
        {destination!=[]? <MarkerF position={{lat:destination.lat , lng: destination.lng}}>
        <OverlayViewF position={{lat:destination.lat , lng: destination.lng}} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          > 
          <div className=' p-2 bg-white font-bold inline-block'>
              <p className=' text-black text-l'>
                {destination.label}
              </p>
          </div>
          </OverlayViewF>
        </MarkerF>:null}

        <></>
      <DirectionsRenderer directions={DirectionRoutePoints} options={{
          polylineOptions: {
            strokeColor: '#000',
            strokeWeight: 3,
          },
          suppressMarkers:true,
      }} ></DirectionsRenderer>

        <></>
      </GoogleMap>
  ) 
}

export default GoogleMapSection