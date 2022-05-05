import {
  ScrollView,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import React from "react";
import { Grid ,Row} from "react-native-paper-grid";
import * as Location from "expo-location";
import { useState, useEffect , useRef} from "react";
import Map from "../Map";
import problems from '../database/db.json';
import haversine from "haversine";
import { Button } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const MainScreen = () => {
  //States
  const [myCoordinates, setCoordinates] = useState([]);
  const [inDanger, setInDanger] = useState(false);
  let watchPositionStatus = useRef()


  let arr = [];
  const LOCATION_SETTINGS = {
    accuracy:Location.Accuracy.High,
    distanceInterval: 0,
  };
  // ----------------------- METHODS ----------------------------


  useEffect(() => {  
    start();
  });
  const start =  async () => {

   let currLocation = await Location.getCurrentPositionAsync(
    LOCATION_SETTINGS
       );
    arr = [...arr, currLocation.coords];    
        setInDanger(checkSafety());
        setCoordinates(arr);

  
  }


  const updatePosition = (currLocation) => {
       
        watchPositionStatus.current.remove();
     
  };
  const getDistance =  (startLoc, endLoc) => {
    let start = {
      latitude: startLoc.latitude,
      longitude: startLoc.longitude,
    };
    let end = {
      latitude: endLoc.latitude,
      longitude: endLoc.longitude,
    };
  
    return haversine(start, end, { unit: "kilometer" });
  }  
  const checkSafety  = () => {
      let b=false;
      for(let i =0; i<problems.problems.length; i++){
        if(getDistance(problems.problems[i],arr[arr.length-1])<problems.problems[i].dangerzone)
          b=true;
      }
      return b
  }
  

  return (
    <React.Fragment>
      <ScrollView>
        
      <View style={styles.pageTitleContainer}>
        <Text style={styles.pageTitle}>Figyelmeztetések</Text>
      </View>
        <SafeAreaView style={styles.contentContainer}>

          <Grid style={styles.paddingMarginZero}>

          

          {inDanger && (
              <Row style={styles.container}>
                <Text style={styles.warn}>Veszélyben vagy!</Text>
              </Row>
            )}
            {!inDanger && (
              <Row style={styles.container}>
                <Text style={styles.notwarn}>Nincs veszély a közelben!</Text>
              </Row>
            )}
          <Map init={myCoordinates} danCoordinates={problems.problems} />
          <Button
              onPress={() => start()}
              mode="container"
            >
            <MaterialCommunityIcons name="refresh" color={"#000000"} size={26} />
          </Button>
          </Grid>
        </SafeAreaView>
      </ScrollView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  warn: {
    color: "red",
    fontWeight: "900",
    fontSize: 30,
  },
  notwarn: {
    color: "black",
    fontWeight: "500",
    fontSize: 25,
  },
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
