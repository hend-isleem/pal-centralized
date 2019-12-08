import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableHighlight
} from "react-native";
import { AsyncStorage } from "react-native";
import { Card, Input, CheckBox } from "react-native-elements";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var user = getData();
  }
  async getData() {
    try {
      return await AsyncStorage.getItem("User");
    } catch {
      console.log("no user data");
    }
  }
  render() {
    return (
      <View>
        <Card containerStyle={styles.container} title="LogIn Page">
          <Input
            onChangeText={this.HandelUserNme.bind(this)}
            numberOfLines={1}
            placeholder="User Name ..."
            leftIcon={<Icon name="user" size={24} color="#cf3c1f" />}
          />

          <Input
            onChangeText={this.HandelEmailChang.bind(this)}
            placeholder="  Email..."
            leftIcon={<Icon name="user" size={24} color="#cf3c1f" />}
          />
          <Text nativeID="VT"></Text>
          <Input
            onChangeText={this.PasswordChang.bind(this)}
            secureTextEntry
            numberOfLines={1}
            placeholder="Password ..."
            leftIcon={<Icon name="lock" size={24} color="#cf3c1f" />}
          />
          <CheckBox
            title="Is a Company"
            checked={this.state.company}
            onPress={() => this.setState({ company: !this.state.company })}
          />
          <Button
            title="Next"
            type="outline"
            onPress={this.HandelSignUp.bind(this)}
          />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardCnt: {
    borderWidth: 0, // Remove Border
    shadowColor: "rgba(0,0,0, 0.0)", // Remove Shadow IOS
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    backgroundColor: "#2d7feb",

    elevation: 0 // This is for Android
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#ffffff",
    padding: 8,
    shadowColor: "rgba(0,0,0, 0.0)", // Remove Shadow IOS
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    shadowRadius: 0
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    color: "#2d7feb",
    textAlign: "center"
  }
});
