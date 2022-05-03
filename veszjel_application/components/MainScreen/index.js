import {
  ScrollView,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React from "react";
import { Grid } from "react-native-paper-grid";
import * as Location from "expo-location";
import { useState, useEffect , useRef} from "react";
import Map from "../Map";
import problems from '../database/db.json';



const MainScreen = () => {
  //States
  const [myCoordinates, setCoordinates] = useState([]);
  let watchPositionStatus = useRef()


  // speed related variables
  let arr = [];

  const LOCATION_SETTINGS = {
    accuracy:Location.Accuracy.High,
    distanceInterval: 0,
  };

  // ----------------------- METHODS ----------------------------

  useEffect(() => {    
    
    (async () => {

      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      watchPositionStatus.current = await Location.watchPositionAsync(
        LOCATION_SETTINGS,
        updatePosition
      );

     
    })();
  }, []);

  const updatePosition = (currLocation) => {
   
        arr = [...arr, currLocation.coords];
        setCoordinates(arr);
     
  };

  

  return (
    <React.Fragment>
      <ScrollView>
      <View style={styles.pageTitleContainer}>
        <Text style={styles.pageTitle}>Figyelmeztetések</Text>
      </View>
        <SafeAreaView style={styles.contentContainer}>
          <Grid style={styles.paddingMarginZero}>
          <Map init={myCoordinates} danCoordinates={problems.problems} />
          </Grid>
        </SafeAreaView>
      </ScrollView>
    </React.Fragment>
  );
};

const options = {
  container: {
    backgroundColor: "#000",
    padding: 2,
    borderRadius: 5,
  },
  text: {
    fontSize: 30,
    backgroundColor: "#FFF",
    marginLeft: 7,
  },
};

const styles = StyleSheet.create({
  pageTitleContainer: {
    flex: 0.8,
    backgroundColor: "#000000",
    borderWidth: 5,
    width: "95%",
    borderColor: "#555555",
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 40,
    marginBottom: 40,
  },

  pageTitle: {
    alignSelf: "stretch",
    textAlign: "center",
    color: "white",
    fontSize: 22,
    padding: 20,
    fontWeight: "900",
  },

  paddingMarginZero: {
    margin: 0,
    padding: 0,
  },

  contentContainer: {
    padding: 8,
    marginHorizontal: 20,
  },

  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    padding: 2,
  },
});




export default (MainScreen);
