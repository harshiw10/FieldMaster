import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TextInput,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Button, Avatar } from "react-native-paper";
import * as Location from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLocationCrosshairs,faLayerGroup } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [mapTypeIndex, setMapTypeIndex] = useState(0);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [showCurrentLocation, setShowCurrentLocation] = useState(false);
  const [searchedLocation, setSearchedLocation] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const mapRef = React.useRef(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location);
    })();
  }, []);

  const mapTypes = [
    { name: "Standard", value: "standard" },
    { name: "Satellite", value: "satellite" },
    { name: "Hybrid", value: "hybrid" },
    { name: "Terrain", value: "terrain" },
   
  ];

  const toggleMapType = () => {
    setShowDropdown(!showDropdown);
  };

  const selectMapType = (index) => {
    setMapTypeIndex(index);
    setShowDropdown(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const focusOnCurrentLocation = () => {
    setShowCurrentLocation(!showCurrentLocation);
    setSearchedLocation(null); // Clear searched location
    if (!showCurrentLocation && currentLocation && mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
    }
  };

  const searchLocation = async () => {
    if (searchQuery) {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            searchQuery
          )}&key=AIzaSyB61t78UY4piRjSDjihdHxlF2oqtrtzw8U`
        );
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          setShowCurrentLocation(false); // Hide current location
          setSearchedLocation({ latitude: lat, longitude: lng });
          if (mapRef.current) {
            mapRef.current.animateToRegion({
              latitude: lat,
              longitude: lng,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            });
          }
        } else {
          console.error("Location not found");
        }
      } catch (error) {
        console.error("Error searching for location:", error);
      }
    }
  };

  const clearSearchQuery = () => {
    setSearchQuery("");
  };


  

  return (
   
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        mapType={mapTypes[mapTypeIndex].value}
        initialRegion={{
          latitude: 6.2427,
          longitude: 80.0607,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {showCurrentLocation && currentLocation && (
          <Marker
            coordinate={{
              latitude: currentLocation.coords.latitude,
              longitude: currentLocation.coords.longitude,
            }}
            title="Current Location"
          />
        )}
        {searchedLocation && (
          <Marker coordinate={searchedLocation} title="Searched Location" />
        )}
      </MapView>

      <View style={styles.searchbar}>
        <View style={styles.locationIconContainer}>
          <MaterialIcons name="location-on" size={24} color="#007BFF" />
        </View>
        <TextInput
          placeholder="Search Location"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          onFocus={onFocus}
          onBlur={onBlur}
          style={[
            styles.searchbarInput,
            isFocused ? styles.searchbarInputFocused : null,
          ]}
          onChangeText={setSearchQuery}
          value={searchQuery}
          onSubmitEditing={searchLocation}
        />
        {searchQuery !== "" && (
          <TouchableOpacity onPress={clearSearchQuery} style={styles.clearIconContainer}>
            <MaterialIcons name="cancel" size={24} color="#707070" />
          </TouchableOpacity>
        )}
        <View style={{ marginLeft: 10 }}>
          <Avatar.Image size={44} source={require("../images/zoysa.png")} />
        </View>
      </View>

      <TouchableOpacity style={styles.layerIconContainer} onPress={toggleMapType}>
      <FontAwesomeIcon icon={faLayerGroup} size={25} color="#fff"/>
        {showDropdown && (
          <View style={styles.dropdownContainer}>
            <FlatList
              data={mapTypes}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => selectMapType(index)}
                >
                  <Text  style={{ color: '#fff' }}>{item.name}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.value}
            />
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2} onPress={focusOnCurrentLocation}>
        <FontAwesomeIcon icon={faLocationCrosshairs} size={25} color="#fff" />
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button
            buttonColor="#007BFF"
            icon="walk"
            mode="contained"
            onPress={() => console.log("Left Button Pressed")}
            style={styles.button}
          >
            Start Measure
          </Button>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            buttonColor="#007BFF"
            icon="content-save-all"
            mode="contained"
            onPress={() => console.log("Right Button Pressed")}
            style={styles.button}
          >
            Templates
          </Button>
        </View>
      </View>
    </View>
  
  );
}

const styles = StyleSheet.create({
  locationIconContainer: {
    position: "absolute",
    left: 20,
    top: "50%",
    transform: [{ translateY: -12 }], // Adjust translateY to vertically center the icon
    zIndex: 1,
  },
  layerIconContainer: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0, 0.7)",
    padding: 10,
    borderRadius: 5,
    right: 10,
    top: Platform.OS === "android" ? "15%" : "27%",
    transform: [{ translateY: -12 }], // Adjust translateY to vertically center the icon
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  dropdownContainer: {
    position: "absolute",
    top:0,
    right: 50,
    backgroundColor: "rgba(0,0,0, 0.7)",
    borderRadius: 5,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  dropdownItem: {
    padding: 10,
    color: '#fff',
  },
  button2: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0, 0.7)",
    padding: 10,
    borderRadius: 5,
    top: Platform.OS === "android" ? "15%" : "18%",
    right: 10,
  },
  buttonContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    bottom: 36,
    left: 16,
    right: 16,
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 15,
  },
  button: {
    flex: 1,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
  container: {
    flex: 1,
  },
  searchbar: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: Platform.OS === "android" ? "4%" : "8%",
    zIndex: 1,
  },
  searchbarInput: {
    borderRadius: 30,
    paddingLeft: 40,
    height: 50,
    width: "80%",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    color:"#000",
    borderWidth: 1,
    borderColor: "#CED0D4",
  },
  searchbarInputFocused: {
    backgroundColor: "#fff",
    borderColor: "#007BFF", // Change border color when focused
  },
  map: {
    width: "100%",
    height: "100%",
  },
  clearIconContainer: {
    position: "absolute",
    left:"75%",
    top: "50%",
    transform: [{ translateY: -12 }],
    zIndex: 1,
  },
});