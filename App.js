

import React, { useState, useEffect } from 'react';
import {
  Button, View, Text, ScrollView, Image, Linking
} from 'react-native';
import styles from './style';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';

import { enableScreens } from 'react-native-screens';

enableScreens();

// const Wallpaper = () => {
//   const [result, setResult] = useState(["loading"]);
//   const [result1, setResult1] = useState([]);
//   const [result2, setResult2] = useState([]);
//   const [result3, setResult3] = useState([]);
//   const [result4, setResult4] = useState([]);
//   const [result5, setResult5] = useState([]);
//   const [result6, setResult6] = useState([]);
//   const [result7, setResult7] = useState([]);
//   const [result8, setResult8] = useState([]);
//   const [result9, setResult9] = useState([]);
//   const [result10, setResult10] = useState([]);

//   const [result11, setResult11] = useState(["loading"]);
//   const [result12, setResult12] = useState([]);
//   const [result13, setResult13] = useState([]);
//   const [result14, setResult14] = useState([]);
//   const [result15, setResult15] = useState([]);
//   const [result16, setResult16] = useState([]);
//   const [result17, setResult17] = useState([]);
//   const [result18, setResult18] = useState([]);
//   const [result19, setResult19] = useState([]);
//   const [result20, setResult20] = useState([]);
//   const [result21, setResult21] = useState([]);
//   const page = "200";

//   const wallpaper = async () => {
//     const api = `https://pixabay.com/api/?key=19895268-5a82b94922465066f475ff928&q=wallpaper&image_type=photo&per_page=${page}`;

//     let data = await fetch(api);
//     let realdata = await data.json();

//     setResult(realdata.hits[Math.floor(Math.random() * page)].largeImageURL);
//     setResult1(realdata.hits[Math.floor(Math.random() * page)].largeImageURL);
//     setResult2(realdata.hits[Math.floor(Math.random() * page)].largeImageURL);
//     setResult3(realdata.hits[Math.floor(Math.random() * page)].largeImageURL);
//     setResult4(realdata.hits[Math.floor(Math.random() * page)].largeImageURL);
//     setResult5(realdata.hits[Math.floor(Math.random() * page)].largeImageURL);
//     setResult6(realdata.hits[Math.floor(Math.random() * page)].largeImageURL);
//     setResult7(realdata.hits[Math.floor(Math.random() * page)].largeImageURL);
//     setResult8(realdata.hits[Math.floor(Math.random() * page)].largeImageURL);
//     setResult9(realdata.hits[Math.floor(Math.random() * page)].largeImageURL);
//     setResult10(realdata.hits[Math.floor(Math.random() * page)].largeImageURL);

//     setResult11(realdata.hits[Math.floor(Math.random() * page)].largeImageURL);
//     setResult12(realdata.hits[Math.floor(Math.random() * page)].largeImageURL);
//     setResult13(realdata.hits[Math.floor(Math.random() * page)].largeImageURL);
//     setResult14(realdata.hits[Math.floor(Math.random() * page)].largeImageURL);
//     setResult15(realdata.hits[Math.floor(Math.random() * page)].largeImageURL);
//     setResult16(realdata.hits[Math.floor(Math.random() * page)].largeImageURL);
//     setResult17(realdata.hits[Math.floor(Math.random() * page)].largeImageURL);
//     setResult18(realdata.hits[Math.floor(Math.random() * page)].largeImageURL);
//     setResult19(realdata.hits[Math.floor(Math.random() * page)].largeImageURL);
//     setResult20(realdata.hits[Math.floor(Math.random() * page)].largeImageURL);
//     setResult21(realdata.hits[Math.floor(Math.random() * page)].largeImageURL);
//   };

//   useEffect(() => {
//     wallpaper()
//   }, [])

//   const ref = React.useRef(null);
//   useScrollToTop(ref);
//   return (
//     <>
//       <ScrollView ref={ref}>
//         <>
//           {/* {result.map(datas => (
//                                 <>
//                                <Image
//                                     style={styles.wallpaper}
//                                     source={{
//                                           uri: `${result}`,
//                                     }} />

//                               <View>
//                                     <Button onPress={() => Linking.openURL(`${result}`)} title="Download" />
//                               </View>
//                               </>
//                         ))} */}

//           <Image
//             style={styles.wallpaper}
//             source={{
//               uri: `${result}`,
//             }} />


//           <Button onPress={() => Linking.openURL(`${result}`)} title="Download" />


//           <Image
//             style={styles.wallpaper}
//             source={{
//               uri: `${result1}`,
//             }} />


//           <Button onPress={() => Linking.openURL(`${result1}`)} title="Download" />


//           <Image
//             style={styles.wallpaper}
//             source={{
//               uri: `${result2}`,
//             }} />


//           <Button onPress={() => Linking.openURL(`${result2}`)} title="Download" />


//           <Image
//             style={styles.wallpaper}
//             source={{
//               uri: `${result3}`,
//             }} />

//           <Button onPress={() => Linking.openURL(`${result3}`)} title="Download" />


//           <Image
//             style={styles.wallpaper}
//             source={{
//               uri: `${result4}`,
//             }} />


//           <Button onPress={() => Linking.openURL(`${result4}`)} title="Download" />



//           <Image
//             style={styles.wallpaper}
//             source={{
//               uri: `${result5}`,
//             }} />


//           <Button onPress={() => Linking.openURL(`${result5}`)} title="Download" />



//           <Image
//             style={styles.wallpaper}
//             source={{
//               uri: `${result6}`,
//             }} />


//           <Button onPress={() => Linking.openURL(`${result6}`)} title="Download" />


//           <Image
//             style={styles.wallpaper}
//             source={{
//               uri: `${result7}`,
//             }} />

//           <Button onPress={() => Linking.openURL(`${result7}`)} title="Download" />


//           <Image
//             style={styles.wallpaper}
//             source={{
//               uri: `${result8}`,
//             }} />


//           <Button onPress={() => Linking.openURL(`${result8}`)} title="Download" />



//           <Image
//             style={styles.wallpaper}
//             source={{
//               uri: `${result9}`,
//             }} />


//           <Button onPress={() => Linking.openURL(`${result9}`)} title="Download" />


//           <Image
//             style={styles.wallpaper}
//             source={{
//               uri: `${result10}`,
//             }} />


//           <Button onPress={() => Linking.openURL(`${result10}`)} title="Download" />






//           <Image
//             style={styles.wallpaper}
//             source={{
//               uri: `${result11}`,
//             }} />


//           <Button onPress={() => Linking.openURL(`${result11}`)} title="Download" />


//           <Image
//             style={styles.wallpaper}
//             source={{
//               uri: `${result12}`,
//             }} />


//           <Button onPress={() => Linking.openURL(`${result12}`)} title="Download" />


//           <Image
//             style={styles.wallpaper}
//             source={{
//               uri: `${result13}`,
//             }} />


//           <Button onPress={() => Linking.openURL(`${result13}`)} title="Download" />

//           <Image
//             style={styles.wallpaper}
//             source={{
//               uri: `${result14}`,
//             }} />

//           <Button onPress={() => Linking.openURL(`${result14}`)} title="Download" />


//           <Image
//             style={styles.wallpaper}
//             source={{
//               uri: `${result15}`,
//             }} />


//           <Button onPress={() => Linking.openURL(`${result15}`)} title="Download" />



//           <Image
//             style={styles.wallpaper}
//             source={{
//               uri: `${result16}`,
//             }} />


//           <Button onPress={() => Linking.openURL(`${result16}`)} title="Download" />



//           <Image
//             style={styles.wallpaper}
//             source={{
//               uri: `${result17}`,
//             }} />


//           <Button onPress={() => Linking.openURL(`${result17}`)} title="Download" />


//           <Image
//             style={styles.wallpaper}
//             source={{
//               uri: `${result18}`,
//             }} />

//           <Button onPress={() => Linking.openURL(`${result18}`)} title="Download" />


//           <Image
//             style={styles.wallpaper}
//             source={{
//               uri: `${result19}`,
//             }} />


//           <Button onPress={() => Linking.openURL(`${result19}`)} title="Download" />



//           <Image
//             style={styles.wallpaper}
//             source={{
//               uri: `${result20}`,
//             }} />


//           <Button onPress={() => Linking.openURL(`${result20}`)} title="Download" />


//           <Image
//             style={styles.wallpaper}
//             source={{
//               uri: `${result21}`,
//             }} />


//           <Button onPress={() => Linking.openURL(`${result21}`)} title="Download" />

//         </>
//       </ScrollView>
//       <View style={styles.appButtonContainer}>
//         <Button style={styles.appButton} title='                 LOAD MORE               ' onPress={wallpaper} />
//         <Text>     </Text>

//       </View>

//     </>
//   )
// }

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Custom profile header' })
        }
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}


const Stack = createStackNavigator();
 

const App = () => {
  return (
    <>
    {/* <Text>hello world</Text>  */}
       <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} /> 
          <Stack.Screen name="Profile" component={ProfileScreen} /> 
        </Stack.Navigator>
      </NavigationContainer>  
    </>
  )
}


export default App;
