import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  StatusBar,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as Notifications from 'expo-notifications';
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Settings = () => {
  const navigation = useNavigation();

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("tr");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  useEffect(() => {
    const handleNotificationPermission = async () => {
      if (notificationsEnabled) {
        const { status } = await Notifications.getPermissionsAsync();
        if (status !== 'granted') {
          const { status: newStatus } = await Notifications.requestPermissionsAsync();
          if (newStatus !== 'granted') {
            console.log('İzin verilmedi');
          }
        }
      } else {
        // Bildirimleri kapatınca izinleri kaldır
        await Notifications.cancelAllScheduledNotificationsAsync();
      }
    };

    handleNotificationPermission();
  }, [notificationsEnabled]);

  const toggleDarkMode = () => {
    setIsDarkMode((previousState) => !previousState);
  };

  const toggleNotifications = () => {
    setNotificationsEnabled((previousState) => !previousState);
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
            Bildirimler
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={notificationsEnabled ? "#f5dd4b" : "#f4f3f4"}
            onValueChange={toggleNotifications}
            value={notificationsEnabled}
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
    backgroundColor: "#f8f9fa",
  },
  darkBackground: {
    backgroundColor: "#222",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  settingContainer: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10, 
    padding: 15,
    marginVertical: 10,
    elevation: 5, 
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
