import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Settings = () => {
  const navigation = useNavigation();

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("tr");

  const toggleDarkMode = () => {
    setIsDarkMode((previousState) => !previousState);
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkBackground]}>
      <StatusBar barStyle="light-content" backgroundColor="#3e24bf" />
      <Header />

      <View style={styles.content}>
        <View style={styles.settingContainer}>
          <Text style={[styles.settingLabel, isDarkMode && styles.darkText]}>
            Karanlık Mod
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={toggleDarkMode}
            value={isDarkMode}
          />
        </View>

        <View style={styles.settingContainer}>
          <Text style={[styles.settingLabel, isDarkMode && styles.darkText]}>
            Dil Seçenekleri
          </Text>
          <Picker
            selectedValue={selectedLanguage}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
          >
            <Picker.Item label="Türkçe" value="tr" />
            <Picker.Item label="İngilizce" value="en" />
            <Picker.Item label="Almanca" value="de" />
            <Picker.Item label="Fransızca" value="fr" />
          </Picker>
        </View>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa", // Açık arka plan
  },
  darkBackground: {
    backgroundColor: "#222", // Karanlık mod için arka plan rengi
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  settingContainer: {
    width: "100%",
    backgroundColor: "#fff", // Kart arka plan rengi
    borderRadius: 10, // Yuvarlatılmış kenarlar
    padding: 15,
    marginVertical: 10,
    elevation: 5, // Gölge efekti
  },
  settingLabel: {
    fontSize: 18,
    marginBottom: 10,
  },
  darkText: {
    color: "#fff",
  },
  picker: {
    height: 50,
    width: "100%",
  },
});

export default Settings;
