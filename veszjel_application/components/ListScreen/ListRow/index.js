import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Col, Row } from "react-native-paper-grid";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";


const ListRow = ({
  danger,
  i
}) => {


  return (
    <View>
      <Collapse
        style={i % 2 == 0 ? styles.gridStyleSecondary : styles.gridStylePrimary}
      >
        <CollapseHeader>
          <View>
            <Row>
              <Col>
                <Text
                  style={
                    i % 2 == 0
                      ? styles.primaryDataText
                      : styles.secondaryDataText
                  }
                >
                  {danger.title}
                </Text>
              </Col>
              <Col>
                <Text
                  style={
                    i % 2 == 0
                      ? styles.primaryDataText
                      : styles.secondaryDataText
                  }
                >
                  {danger.place}
                </Text>
              </Col>
            </Row>
          </View>
        </CollapseHeader>
        <CollapseBody>
              <Text style={
                    i % 2 == 0
                      ? styles.primaryDataText
                      : styles.secondaryDataText
                  }>
                    {danger.description}
              </Text>
           
        </CollapseBody>
      </Collapse>
    </View>
  );
};

const styles = StyleSheet.create({
  gridStylePrimary: {
    justifyContent: "center",
    backgroundColor: "lightgray",
    textAlign: "center",
    color: "black",
    width: "90%",
    margin: "5%",
  },
  gridStyleSecondary: {
    justifyContent: "center",
    backgroundColor: "gray",
    color: "white",
    textAlign: "center",
    width: "90%",
    margin: "5%",
  },

  primaryDataText: {
    padding: 20,
    color: "white",
    textAlign: "center",
  },

  secondaryDataText: {
    padding: 20,
    color: "black",
    textAlign: "center",
    fontWeight: "800",
  },
});



export default (ListRow);
