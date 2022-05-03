import MapView, { Marker } from "react-native-maps";
import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";


const Map = ({ init, danCoordinates }) => {

  if(init.length)
    return (
      <View>
        <MapView
          showsUserLocation
          loadingEnabled
          style={styles.map}
          initialRegion={{
            latitude: init[0].latitude,
            longitude: init[0].longitude,
            latitudeDelta: 0.006,
            longitudeDelta: 0.006,
          }}
        >
          { (
            <>
              { danCoordinates.map((current, i) => {
                return (
                  <Marker
                    key={i}
                    coordinate={{
                      latitude: current.latitude,
                      longitude: current.longitude,
                    }}
                    title={current.title}
                    description={current.description}
                  >
                    <View style={styles.circle}>
                      <Text style={styles.pinText}>{i}</Text>
                    </View>
                  </Marker>
                );
              })}
            </>
          )}
        </MapView>
      </View>
    );
    else return (
      <View>
      </View>
    );
};

const styles = StyleSheet.create({
  circle: {
    width: 10,
    height: 10,
    borderRadius: 15,
    backgroundColor: "#3498db",
    opacity: 0.2,
  },
  pinText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 10,
  },
  map: {
    height: Dimensions.get("window").height * 0.5,
  },
});

export default Map;
