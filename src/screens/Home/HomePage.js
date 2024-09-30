import React from "react";
import { View, Text, Button, StyleSheet, StatusBar  } from "react-native";

const HomePage = () => {
    return (
        <View style={styles.container}>
             <StatusBar barStyle="light-content" backgroundColor="#3e24bf" />
            <View style={styles.header}>
                <Text style={styles.title}>Cat Or Dog ?</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.contentText}>
                    Merhaba, aşağıda bulunan butona tıklayarak fotoğrafı yükleyebilirsin.
                </Text>
            </View>

            <View style={styles.footer}>
                <Button title="Devam Et" onPress={() => alert('Devam Et butonuna tıklandı!')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    header: {
        backgroundColor: '#6449eb', 
        padding: 20, 
        alignItems: 'center', 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 20, 
    },
    footer: {
        padding: 10,
        backgroundColor: '#ddd',
    },
});

export default HomePage;
