import React,{useState} from 'react';
import { StyleSheet,Image,ImageBackground, Text,View,Modal,Alert,Pressable } from 'react-native';

export default function App() {
  const image = { uri: "https://rightquotes4all.com/wp-content/uploads/2020/08/Free-Birthday-Cards.jpg" };
  const [modalVisible, setModalVisible] = useState(false);
  const styles = StyleSheet.create({
    // centeredView: {
    //   flex: 1,
    //   justifyContent: "center",
    //   alignItems: "center",
    //   marginTop: 22
    // },
    modalView: {
      margin: 20,
      padding: 35,
      alignItems: "center",
    },
    button: {
      borderRadius: 10,
      padding: 15,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "greenyellow",
      marginTop:100
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      fontWeight:700,
      fontSize:25,
      maxWidth:300,
      color:"white",
      textAlign: "center"
    },
    container: {
      paddingTop: 50,
      alignItems:"center",
    },
    image:{
      flex:1,
      width:800,
    },
    stretch: {
      width:400,
      height:600,
      resizeMode: 'stretch',
      borderRadius:20
    },
    text:{
      fontSize:40,
      color:"green",
      fontFamily:"italics",
      marginBottom:40
    },
  });
  return (
    <View style={styles.centeredView}>
      <ImageBackground source={image} style={styles.container}>
      <Text
      style={styles.text}>Happy<br></br>Birthday</Text>
         <Image
        style={styles.stretch}
        source={require('./assets/kev.jpg')}
      ></Image>
      <Modal
       animationType="slide"
       transparent={true}
       visible={modalVisible}
       onRequestClose={() => {
         Alert.alert("Modal has been closed.");
         setModalVisible(!modalVisible);
       }}
       >
         <View style={styles.container}>
         <ImageBackground source={image} style={styles.image}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
            Happy blessed birthday to 
            you my wonderful celebrity, 
            more years to witness in good health, 
            wealth, happiness, peace, love,
            success and joy in Jesus' mighty name.
            Happy birthday to you, long life,
            many more years ahead for you.
            Peace, joy, good health and prosperity greetings to you
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>close</Text>
            </Pressable>
          </View>
          </ImageBackground>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Open me!</Text>
      </Pressable>
      </ImageBackground>
    </View>
  );
};


