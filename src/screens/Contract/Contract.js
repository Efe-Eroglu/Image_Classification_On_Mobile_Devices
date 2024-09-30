import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Contract = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>KVKK ve Aydınlatma Politikası</Text>
      </View>

      <View style={styles.content}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.paragraph}>
          Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu'na (KVKK) uygun olarak, 
          kişisel verilerinizi nasıl topladığımız, kullandığımız, koruduğumuz ve sakladığımız hakkında bilgi vermek amacıyla hazırlanmıştır.
        </Text>
        <Text style={styles.heading}>1. Kişisel Verilerin Kullanım Amaçları</Text>
        <Text style={styles.paragraph}>
          Topladığımız kişisel verilerinizi aşağıdaki amaçlar için kullanabiliriz:
        </Text>
        <Text style={styles.paragraph}>
          - Hizmetlerimizi sunmak ve yönetmek,{"\n"}
          - Kullanıcı deneyimini geliştirmek,{"\n"}
          - İletişim sağlamak ve bilgilendirmek,{"\n"}
          - Yasal yükümlülüklerimizi yerine getirmek.
        </Text>
        <Text style={styles.heading}>2. Kişisel Verilerin Paylaşımı</Text>
        <Text style={styles.paragraph}>
          Kişisel verileriniz, yasal zorunluluklar ve belirli hizmet sağlayıcılar (örneğin: bulut hizmetleri, ödeme sistemleri) ile paylaşılabilir. 
          Bu durumlar, sadece gerekli olduğu hallerde ve yasal gereklilikler çerçevesinde gerçekleşir.
        </Text>
        <Text style={styles.heading}>3. Kişisel Verilerin Korunması</Text>
        <Text style={styles.paragraph}>
          Kişisel verilerinizin güvenliği bizim için önemlidir. Verilerinizi korumak için uygun teknik ve idari önlemleri alıyoruz. 
          Ancak, internet üzerinden yapılan veri iletimlerinde tam bir güvenlik sağlanamayabileceğini unutmayın.
        </Text>
        <Text style={styles.heading}>4. Kullanıcı Hakları</Text>
        <Text style={styles.paragraph}>
          Kişisel verilerinizi koruma kanunları kapsamında sahip olduğunuz haklar:
        </Text>
        <Text style={styles.paragraph}>
          - Kişisel verilerinizi öğrenme,{"\n"}
          - Verilerinizin düzeltilmesini talep etme,{"\n"}
          - Verilerinizin silinmesini veya yok edilmesini isteme,{"\n"}
          - Verilerinizin işlenmesine itiraz etme.
        </Text>
        <Text style={styles.heading}>5. İletişim Bilgileri</Text>
        <Text style={styles.paragraph}>
          KVKK ve aydınlatma politikasıyla ilgili sorularınız veya talepleriniz için bizimle iletişime geçebilirsiniz:
        </Text>
        <Text style={styles.paragraph}>
          Bu aydınlatma metni, kişisel verilerinizin korunmasına yönelik politikalarımızı ve uygulamalarımızı açıklamaktadır. 
          Hizmetlerimizi kullanarak bu politikaları kabul ettiğinizi belirtmiş olursunuz.
        </Text>
      </ScrollView>
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
    paddingHorizontal: 15,
    paddingVertical:10,
  },
  policyText: {
    textAlign: "center",
    fontSize: 18,
    color: "#333",
  },
  footer: {
    padding: 15,
    backgroundColor: "#6449eb",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 5,
  },
});

export default Contract;
