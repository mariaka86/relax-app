import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, View,Image,} from 'react-native';
import Button from './components/buttons'



const RelaxingImage = require('./images/relax.jpg')

export default function App() {
  return (
    <View style={styles.container}>
      <View style ={styles.imageContainer}>
      <Image source={RelaxingImage} style={styles.image} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Unwind" />
        <Button label="Focus" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,    
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});