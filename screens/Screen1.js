import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { BlurView } from "expo-blur";

const image = { uri: "https://reactjs.org/logo-og.png" };
const img = require("../assets/coffees/allison-griffith-VCXk_bO97VQ-unsplash.jpg");

export default function Screen1({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground style={{ height: "100%", width: "100%", marginBottom: 30}} source={img}>
      </ImageBackground>
      <View style={{ backgroundColor: 'black', height: '60%', width: '100%', marginTop: -80, alignItems: 'center'}}>
          <Text style={{color: 'white', fontSize: 36, fontFamily: 'Roboto', textAlign: 'center', fontWeight: 'bold', marginTop: 18}}>Coffee so good, your taste buds will love it.</Text>
          <Text style={{color: '#a9a9a9', textAlign: 'center', fontSize: 18}}>The best grain, the finest roast, the powerful flavor</Text>
          <TouchableOpacity style={{backgroundColor: '#eee8aa', width: '80%', height: '12%', alignItems: 'center', marginTop: '5%', borderRadius: 10}} onPress={() => navigation.navigate('Screen2')}>
            <Text style={{color: 'white', marginBottom: 'auto', marginTop: 'auto', fontSize: 18}}>Get Started</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
