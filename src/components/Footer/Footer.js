import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const Footer = () =>{
    const navigation = useNavigation();
  
    return(
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
    )
}

const styles = StyleSheet.create({
    footer: {
        padding: 15,
        backgroundColor: "#6449eb",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
})

export default Footer;