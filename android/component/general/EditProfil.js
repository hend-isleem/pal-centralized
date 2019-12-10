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
import { Card, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Imguploader from "../general/UploadPhoto";
import axios from "axios";
// import FormData from "formdata-node";
// import ImagePicker from "react-native-image-picker";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      image: null
    };
    this.HandelImage = this.HandelImage.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  HandleSkip(e) {
    // console.log(e.target);
  }
  HandleSubmit() {}
  HandelImage(uri) {
    this.setState({
      image: uri
    });
    console.log(this.state.image, "from Parent");
  }
  async getData() {
    try {
      var that = this;
      await AsyncStorage.getItem("user").then(user => {
        that.setState({ user: JSON.parse(user) });
      });
    } catch {
      console.log("error");
    }
  }

  async postPicture() {
    const apiUrl = `http://127.0.0.1:3004/user/upload`;
    const uri = this.state.image.uri;
    const uriParts = uri.split(".");
    const fileType = uriParts[uriParts.length - 1];
    const formData = new FormData();

    await formData.append(
      "file",
      JSON.stringify({
        uri: this.state
      })
    );

    // formData.append("authToken", "secret");
    // formData.append("photo", JSON.stringify(formData));

    try {
      // console.log(formData.getAll("file"), "file");
      await axios
        .post(`http://127.0.0.1:3004/user/upload`, formData, {
          headers: {
            Accept: "application/json"
            // "Content-Type": "multipart/form-data"
          }
        })
        .then(function(response) {
          //handle success
          console.log(response, "response");
        })
        .catch(function(response) {
          //handle error
          console.log(response, "respose");
        });
    } catch {
      console.log("catch");
    }
  }
  render() {
    return (
      <View>
        <Card
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          title="Edit Profile"
        >
          <Input
            nativeID={"description"}
            numberOfLines={1}
            placeholder="description."
            leftIcon={<Icon name="user" size={24} color="#cf3c1f" />}
          />
          {/* <input type="file" onChange={this.HandleSkip} /> */}

          <Input
            placeholder="  Email..."
            leftIcon={<Icon name="user" size={24} color="#cf3c1f" />}
          />
          <Text nativeID="VT"></Text>
          <Input
            secureTextEntry
            numberOfLines={1}
            placeholder="Password ..."
            leftIcon={<Icon name="lock" size={24} color="#cf3c1f" />}
          />
          <View>
            <Imguploader getUrl={this.HandelImage.bind(this)} />
            <Button
              title="Uploade"
              onPress={this.postPicture.bind(this)}
            ></Button>
          </View>
          <View>
            <Button
              title="Skip"
              type="outline"
              onPress={this.HandleSkip.bind(this)}
            />
            <Button
              title="Sumbit"
              type="outline"
              onPress={this.HandleSubmit.bind(this)}
            />
          </View>
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
