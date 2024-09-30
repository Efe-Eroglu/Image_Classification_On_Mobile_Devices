import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3e24bf" />
      <Header/>
      <View style={styles.content}>
        <Text style={styles.contentText}>
          Merhaba, aşağıda bulunan butona tıklayarak fotoğrafı yükleyebilirsin.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Choice")}
        >
          <Text style={styles.buttonText}>Devam Et</Text>
        </TouchableOpacity>
      </View>

      <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: {
    fontSize: 18,
    textAlign: "center",
    margin: 20,
  },
  button: {
    backgroundColor: "#6449eb",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomePage;
