import * as React from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';
 
export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
      <Image
          style={styles.image}
          source={require('./img/Logo.png')}
          resizeMode="contain"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.15,
    backgroundColor: '#F0F8FF',
  },
  headerText: {
    padding: 30,
    fontSize: 30,
    marginTop: -50,
    color: 'black',
    textAlign: 'center',
  },
  image: {
    width: 250,
    height: 200,
    marginTop: -30,
    marginLeft: 60,
    borderRadius: 20,
    
  },
});
