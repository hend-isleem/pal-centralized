import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableHighlight
} from "react-native";
import Constants from "expo-constants";

// You can import from local files

// or any pure javascript modules available in npm
// import { Card } from "react-native-paper";
// import "react-native-gesture-handler";

export default class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text style={styles.paragraph}>About As</Text>
          <Text style={styles.container}></Text>
          <Button
            title="Change Tilte "
            onPress={() => {
              this.props.navigation.setParams({ otherParam: "Updated" });
            }}
          />
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});
