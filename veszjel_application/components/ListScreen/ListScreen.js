import React from "react";
import { ScrollView, View, Text, SafeAreaView, StyleSheet } from "react-native";
import ListRow from "./ListRow";
import { List } from "react-native-paper";

import problems from '../database/db.json';

const ListScreen = ({ navigation}) => {
  return (
    <ScrollView>
      <View style={styles.pageTitleContainer}>
        <Text style={styles.pageTitle}>Veszélyjelzések</Text>
      </View>

      <SafeAreaView style={styles.containerStyle}>
        {problems.problems.length > 0 && (
          <List.Section title="Veszélyjelzések">
            {problems.problems.length &&
              problems.problems.map((danger, i) => {
                return (
                  <ListRow
                    key={i}
                    navigation={navigation}
                    danger={danger}
                    i={i}
                  />
                );
              })}
          </List.Section>
        )}
        {problems.problems.length === 0 && (
          <Text >Nincs megjeleníthető hír.</Text>
        )}
      </SafeAreaView>
    </ScrollView>
  );
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
});


export default (ListScreen);
