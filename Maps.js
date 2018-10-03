/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
/* To  View the user Bookings Screen */
import React, { Component } from "react";

var dismissKeyboard = require("dismissKeyboard");
import MapView from "react-native-maps";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  Navigator,
  ListView,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from "react-native";

var usersLoc = [];
var newMarkers = [
  {
    latlng: {
      latitude: 34.4368128,
      longitude: 85.9561117
    },
    title: "China",
    description: "Hello china"
  },

  {
    latlng: {
      latitude: 33.1590347,
      longitude: 40.2251502
    },
    title: "Russia",
    description: "Hello Russia"
  },
  {
    latlng: {
      latitude: 20.0047203,
      longitude: 64.3771037
    },
    title: "India",
    description: "Hello India"
  },
  {
    latlng: {
      latitude: 30.0478341,
      longitude: 60.3064486
    },
    title: "Pakistan",
    description: "Hello Pakistan"
  },
  {
    latlng: {
      latitude: 38.7391091,
      longitude: 26.1567813
    },
    title: "Turkey",
    description: "Hello Turkey"
  },
  {
    latlng: {
      latitude: 31.6717122,
      longitude: 120.2333026
    },
    title: "Japan",
    description: "Hello Japan"
  },
  {
    latlng: {
      latitude: 46.5107412,
      longitude: 94.8319991
    },
    title: "Mongolia",
    description: "Hello Mongolia"
  }
];
const origin = { latitude: 17.737841, longitude: 83.304898 };
const destination = { latitude: 17.721327, longitude: 83.296315 };
const GOOGLE_MAPS_APIKEY = "AIzaSyD4BmoKsmjMJyMRDu2MpN6_lAM2E5AWD58"; //"AIzaSyDwTVHgrUZc6BAQaj7JLVk7ThdKWVfA85Y";
class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfUsers: [],
      usersLocation: [],
      spinner: false,
      position: {
        latitude: parseFloat(17.737841), //parseFloat(this.props.navigation.state.params.locationArray[0].eventLatitude),
        longitude: parseFloat(83.304898), //parseFloat(this.props.navigation.state.params.locationArray[0].eventLongitude),
        latitudeDelta: 0.04,
        longitudeDelta: 0.04,
        error: null
      },
      result: [],
      marker: {
        latlang: {
          latitude: Number,
          longitude: Number
        }
      },
      markers: newMarkers
    };
    this.onRegionChange = this.onRegionChange.bind(this);
  }
  componentWillMount() {
    try {
      navigator.geolocation.getCurrentPosition(position => {
        alert(JSON.stringify(position));
        this.setState({
          position: {
            latitude: parseFloat(position.coords.latitude), //parseFloat(this.props.navigation.state.params.locationArray[0].eventLatitude),
            longitude: parseFloat(position.coords.longitude), //parseFloat(this.props.navigation.state.params.locationArray[0].eventLongitude),
            latitudeDelta: this.state.position.latitudeDelta,
            longitudeDelta: this.state.position.longitudeDelta,
            error: null
          }
        });
      });
      // let marker = {
      //   latlang: {
      //     latitude: parseFloat(respJson.results[0].geometry.location.lat),
      //     longitude: parseFloat(respJson.results[0].geometry.location.long)
      //   }
      // };
      // this.setState({ marker: marker }, () => {
      //   this.setState({
      //     spinner: false
      //   });
      //   console.log(
      //     "mkdmfsdmmsd" + JSON.stringify(respJson) + "   " + Platform.OS
      //   );
      // });
    } catch (error) {
      alert("catch error" + error);
    }
    // this.setState({
    //   spinner:false
    // })
  }
  onBack() {
    dismissKeyboard();
  }
  onPress() {
    alert("onPress");
  }

  onRegionChange(position) {
    this.setState({ position });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.leftHeader} />
          <View style={styles.centerHeader}>
            <Text style={styles.headerTitle}>Map</Text>
          </View>
          <View style={styles.rightHeader} />
        </View>
        <View style={styles.line} />

        <View style={styles.body}>
          {this.state.spinner ? (
            <ActivityIndicator size="large" color="black" />
          ) : Platform.OS === "ios" ? (
            <MapView
              provider="google"
              style={styles.map}
              onRegionChange={this.onRegionChange}
              initialRegion={{
                latitude: this.state.position.latitude,
                longitude: this.state.position.longitude,
                latitudeDelta: this.state.position.latitudeDelta,
                longitudeDelta: this.state.position.longitudeDelta
              }}
              showsUserLocation={true}
              showsMyLocationButton={true}
              followsUserLocation={true}
              showsCompass={true}
              showsTraffic={true}
              rotateEnabled={true}
              loadingEnabled={true}
              pitchEnabled={true}
            />
          ) : (
            <MapView
              provider="google"
              style={styles.map}
              onRegionChange={this.onRegionChange}
              region={{
                latitude: this.state.position.latitude,
                longitude: this.state.position.longitude,
                latitudeDelta: this.state.position.latitudeDelta,
                longitudeDelta: this.state.position.longitudeDelta
              }}
              showsUserLocation={true}
              showsMyLocationButton={true}
              followsUserLocation={true}
              showsCompass={true}
              showsTraffic={true}
              rotateEnabled={true}
              loadingEnabled={true}
              pitchEnabled={true}
            />
          )}
        </View>
      </View>
    );
  }
}
//  <View style={{ height: 100, width: 100, backgroundColor: 'transparent' }}>
//   <Image source={{ uri: marker.profilePic }} style={{ height: 50, width: 50 }} />
// </View>
var styles = StyleSheet.create({
  /* body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   // backgroundColor: '#F5FCFF',
  },*/
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  container: {
    flex: 1
    // backgroundColor:'#f5f5f5'
  },
  header: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "black"
  },
  leftHeader: {
    flex: 0.2,
    justifyContent: "center",
    alignSelf: "center"
  },
  centerHeader: {
    flex: 0.6,
    justifyContent: "center",
    alignSelf: "center"
  },
  rightHeader: {
    flex: 0.2,
    justifyContent: "center",
    alignSelf: "center"
  },
  List: {
    flex: 0.75,
    marginTop: 10,
    backgroundColor: "#f5f5f5"
  },
  body: {
    flex: 0.85
    //  backgroundColor:'#f5f5f5',
  },
  headerTitle: {
    fontSize: 19,
    marginTop: 10,

    fontWeight: "bold",
    textAlign: "center",
    color: "white"
  },

  line: {
    flex: 0.0015,
    backgroundColor: "#013369"
  },
  backIcon: {
    width: 30,
    height: 30,
    marginLeft: 3,
    marginTop: 10
  },
  subBody: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10
  },
  sub1: {
    flex: 0.4955
  },
  margin: {
    flex: 0.0055,
    backgroundColor: "#0066cc"
  },
  sub2: {
    flex: 0.4955
  },
  arrows: {
    justifyContent: "center",
    alignSelf: "center"
  },
  arrows1: {
    //marginTop:10,
    justifyContent: "center",
    alignSelf: "center"
  },
  bodyContainer: {
    flex: 1
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  map: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});

module.exports = Maps;
