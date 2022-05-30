import { ScrollView, View, Text, SafeAreaView, StyleSheet , TextInput} from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import Dialog from "react-native-dialog";
import problems from '../database/reports.json';

const ReportScreen = () => {

  const [alertMsg, setAlertMsg] = React.useState("");
  const [message, setMessage] = React.useState(null);
  const [visibleAlert, setVisibleAlert] = React.useState(false);
  const [first, setFirst] = React.useState("");
  const [Second, setSecond] = React.useState("");
 
  const handleStartRun = () => {    
      if(Second===""||first===""){
        onAlert(true);
        return;
      }
      let newItem= {title:first,description:Second};
      problems.problems=[...problems.problems,newItem];
      console.log(problems);
      
    
    fetch('http://192.168.2.103:3000', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem)
    })
      onAlert(false);
  };


  const onAlert = (boolean) => {
      if(boolean){
        setMessage("Kérem töltse ki a szövegmezőlket!");
        setAlertMsg("Figyelem!");
      }
      else{
        setMessage("A hibajegy elküldésre került!");
        setAlertMsg("Siker!");
      }
      setVisibleAlert(true);
  };

  return (
    <ScrollView>
      <View style={styles.pageTitleContainer}>
        <Text style={styles.pageTitle}>Veszélybejelentő</Text>
      </View>

      <SafeAreaView style={styles.containerStyle}>
      <Text style={styles.text}>Helyszín:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setFirst}
      />
      <Text style={styles.text}>Leírás:</Text>
      <TextInput
        
        multiline={true}
        style={styles.inputLong}
        onChangeText={setSecond}
      />
        <Button
          onPress={handleStartRun}
          style={styles.button}
          mode="container"
        >
          <Text style={styles.buttonText}> Küldés</Text>
        </Button>
        <Dialog.Container visible={visibleAlert}>
          <Dialog.Title>{alertMsg}</Dialog.Title>
          <Text style={styles.alertText}>{message}</Text>
          <Dialog.Button label="ok" onPress={() => setVisibleAlert(false)} />
        </Dialog.Container>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  alertText: {
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "900",
  },
  containerStyle: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: "center",
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
  input: {
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#555555",
    borderRadius: 20,
    padding: 10,
  },inputLong: {
      height:150,
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#555555",
    borderRadius: 20,
    padding: 10,
  },

  button: {
    
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: "#000000",
    borderWidth: 5,
    borderColor: "#555555",
    borderRadius: 20,
    padding: 10,
  },

  buttonText: {
    color: "white",
    fontWeight: "900",
    fontSize: 20,
  },
  text: {
    fontWeight: "900",
    fontSize: 18,
  },

});

export default ReportScreen;
