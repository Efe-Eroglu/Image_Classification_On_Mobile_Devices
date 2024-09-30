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
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Choice = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3e24bf" />
      <View style={styles.header}>
        <Text style={styles.title}>Cat Or Dog ?</Text>
      </View>

      <View style={styles.content}>
        <TouchableOpacity style={styles.box} activeOpacity={0.8}>
          <View style={styles.topBox}>
            <FontAwesome name="camera-retro" size={100} color="white" />
          </View>

          <View style={styles.botBox}>
            <Text style={styles.subtitle}>
              Kamerayı kullanarak bir resim çek
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.box, { backgroundColor: "#e01212" }]} activeOpacity={0.8}>
          <View style={styles.topBox}>
            <FontAwesome name="picture-o" size={100} color="white" />
          </View>
          <View style={styles.botBox}>
            <Text style={styles.subtitle}>Galeriden bir fotoğraf seç</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Contract")}
        >
          <FontAwesome5 name="file-signature" size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("HomePage")}
        >
          <MaterialCommunityIcons name="home" size={42} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Settings")}
        >
          <Ionicons name="settings-sharp" size={36} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#6449eb",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
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
  footer: {
    padding: 15,
    backgroundColor: "#6449eb",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  box: {
    backgroundColor: "#1ae81a",
    padding: 20,
    borderRadius: 15,
    width: "85%",
    height: "40%",
    marginBottom: 20,
  },
  topBox: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: "white",
  },
});

export default Choice;
