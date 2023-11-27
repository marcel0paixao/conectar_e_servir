import React, { useEffect, useState } from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import styles from "../../../assets/styles/globalStyles";
import * as Location from 'expo-location';
import { Image } from "react-native";
import MapViewDirections from 'react-native-maps-directions';

export default function Map(){
    const [coords, setCoords] = useState<Array<{
        latitude: number,
        longitude: number
    }>>();

    useEffect(() => {
        getLocation();
    }, []);

    const getLocation = async (): Promise<void> => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.log('Permissão de localização não concedida');
          return;
        }
      
        let location = await Location.getCurrentPositionAsync({});
        Location.isBackgroundLocationAvailableAsync();
        setCoords([
            {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            },
            {
                latitude: location.coords.latitude - location.coords.latitude/10000,
                longitude: location.coords.longitude - location.coords.latitude/10000
            }
        ])
    };

    if (coords) return (
        <MapView style={styles.map} provider={PROVIDER_GOOGLE} initialRegion={{
            latitude: coords[0].latitude,
            longitude: coords[0].longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}>
            {coords.map((coord, index) => 
                
                <Marker
                    key={index}
                    coordinate={{
                        latitude: coord.latitude,
                        longitude: coord.longitude,
                    }}
                    icon={require('../../../assets/images/location.png')}
                    title={index == 0 ? 'Minha localização' : 'Localização da pessoa'}>
                        <Image
                            style={{width: 50, height: 50, resizeMode: 'contain'}} 
                            source={index == 1 ? require('../../../assets/images/location.png') : require('../../../assets/images/person.png')} />
                    </Marker>
            )}
            <MapViewDirections
                origin={coords[0]}
                destination={coords[1]}
                precision="high"
                timePrecision="now"
                mode="DRIVING"
                apikey={'AIzaSyD8zt_HLlOBMJfsvnu3TLxaY7fExnZjueA'}
                strokeWidth={5}
                optimizeWaypoints
            />
        </MapView>
    )
}