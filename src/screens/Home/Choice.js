import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Choice = () => {

  const navigation = useNavigation();

  const [cameraPermission, setCameraPermission] = useState(null);
  const [galleryPermission, setGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(cameraStatus.status === "granted");

      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setGalleryPermission(galleryStatus.status === "granted");
    })();
  }, []);

  const openCamera = async () => {
    if (cameraPermission === false) {
      Alert.alert("Kameraya erişim izni verilmedi");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const openGallery = async () => {
    if (galleryPermission === false) {
      Alert.alert("Galeriye erişim izni verilmedi");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#3e24bf" />

      <Header/>

      <View style={styles.content}>
        <TouchableOpacity style={styles.box} onPress={openCamera}>
          <View style={styles.topBox}>
            <FontAwesome name="camera-retro" size={100} color="white" />
          </View>
          <View style={styles.botBox}>
            <Text style={styles.subtitle}>
              Kamerayı kullanarak bir resim çek
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.box, { backgroundColor: "#e01212" }]}
          onPress={openGallery}
        >
          <View style={styles.topBox}>
            <FontAwesome name="picture-o" size={100} color="white" />
          </View>
          <View style={styles.botBox}>
            <Text style={styles.subtitle}>Galeriden bir fotoğraf seç</Text>
          </View>
        </TouchableOpacity>

        {image && <Image source={{ uri: image }} style={styles.image} />}
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
  botBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },

});

export default Choice;
