import React, { useRef } from 'react';
import MapView, { LatLng, Marker, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { GooglePlaceDetail, GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { google_api_key } from '../environments';
import Constants from 'expo-constants';
import { Text } from 'react-native';
import { useState } from 'react';
import MapViewDirections from 'react-native-maps-directions';
import { TouchableOpacity } from 'react-native-gesture-handler';

type InputAutocompleteProps = {
  label: string;
  placeholder?: string;
  onPlaceSelected: (details: GooglePlaceDetail | null) => void;
};

function InputAutocomplete({
  label,
  placeholder,
  onPlaceSelected,
}: InputAutocompleteProps) {
  return (
    <>
      <Text>{label}</Text>
      <GooglePlacesAutocomplete
        styles={{ textInput: styles.input }}
        placeholder={placeholder || ""}
        fetchDetails
        onPress={(data, details = null) => {
          onPlaceSelected(details);
        }}
        query={{
          key: google_api_key,
          language: "pt-BR",
        }}
      />
    </>
  );
}

export default function Maps() {
  const [origin, setOrigin] = useState<LatLng | null>();
  const [destination, setDestination] = useState<LatLng | null>();
  const mapRef = useRef<MapView>(null);

  const moveTo = async (position: LatLng) => {
    const camera = await mapRef.current?.getCamera();
    if (camera) {
      camera.center = position;
      mapRef.current?.animateCamera(camera, { duration: 1000 });
    }
  };

  const onPlaceSelected = (details: GooglePlaceDetail | null, flag: "Origin" | "Destination") => {
    const set = flag === "Origin" ? setOrigin : setDestination;
    const position = {
      longitude: details?.geometry.location.lng || 0,
      latitude: details?.geometry.location.lat || 0,
    };
    set(position);
    moveTo(position);
  };

  return (
    <View style={styles.container}>
      <MapView ref={mapRef} style={styles.map} provider={PROVIDER_GOOGLE}>
        {origin && <Marker coordinate={origin} />}
        {destination && <Marker coordinate={destination} />}
        {origin && destination && (
          <MapViewDirections origin={origin} destination={destination} apikey={google_api_key} />
        )}
      </MapView>

      <View style={styles.searchContainer}>
        <InputAutocomplete
          label="Origin"
          onPlaceSelected={(details) => {
            onPlaceSelected(details, "Origin");
          }}
        />
        <InputAutocomplete
          label="Destination"
          onPlaceSelected={(details) => {
            onPlaceSelected(details, "Destination");
          }}
        />
        <TouchableOpacity style={styles.button}>
          <Text>Tracer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  searchContainer: {
    position: "absolute",
    width: "90%",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation:4,
    padding: 8,
    borderRadius: 8,
    top: Constants.statusBarHeight,
    },
    input: {
    borderColor: "#888",
    borderWidth: 1,
    },
    button: {
    backgroundColor: 'red',
    padding: 10,
    }
});