/** @format */

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import rest from "../src/api/rest";
// import { apiRequest } from "../src/utils/apiRequest";

const Login = ({ navigation }) => {
  const [dataLogin, setDataLogin] = useState({
    username: "",
    password: "",
  });
  // const [email, onChangeEmail] = useState("");
  // const [pass, onChangePass] = useState("");

  const handleChange = async () => {
    dataLogin.grant_type = "password";
    let s = new URLSearchParams(Object.entries(dataLogin)).toString();
    console.log(dataLogin, s);
    try {
      await rest
        .login(s)
        .then((res) => {
          console.log(res);
          navigation.navigate("HomePageAdmin");
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/logo.png")}
      />

      <Text style={styles.login}>LOGIN</Text>
      <TextInput
        name="username"
        style={styles.input}
        // onChangeText={handleChange}
        onChangeText={(text) =>
          setDataLogin({
            ...dataLogin,
            username: text,
          })
        }
        value={dataLogin.username}
        placeholder="Email or Username"
        keyboardType="numeric"
      />
      <TextInput
        name="password"
        secureTextEntry={true}
        style={styles.input}
        // onChangeText={handleChange}
        onChangeText={(text) =>
          setDataLogin({
            ...dataLogin,
            password: text,
          })
        }
        value={dataLogin.password}
        placeholder="password"
        keyboardType="numeric"
      />

      {/* <TouchableOpacity style={styles.button}>
				<Button onPress = {handleChange} style={styles.textBtn} title = "LOGIN"></Button>
			</TouchableOpacity> */}
      <TouchableOpacity style={styles.button} onPress={handleChange}>
        <Text style={styles.textBtn}>CONTINUE</Text>
      </TouchableOpacity>

      <Text style={styles.baseText}>Forgot Password?</Text>
      <Text style={styles.baseText}>
        Don't have account? <nbsp></nbsp>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          Create an account
        </TouchableOpacity>
      </Text>
    </View>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0FFFF",
    alignItems: "center", //gi???a trang
    justifyContent: "center",
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
  login: {
    fontFamily: "Sans-serif",
    fontWeight: "bold",
    fontSize: 30,
    color: "#426EB4",
    marginBottom: 25,
  },
  baseText: {
    fontFamily: "Sans-serif",
    fontWeight: "bold",
    fontSize: 10,
    color: "#426EB4",
    marginTop: 10,
  },
  input: {
    height: 40,
    margin: 16,
    borderBottomWidth: 1,
    padding: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#426EB4",
    padding: 10,
    height: 35,
    width: 130,
    borderRadius: 20,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 30,
    marginBottom: 15,
  },
  textBtn: {
    fontFamily: "Sans-serif",
    fontWeight: "bold",
    fontSize: 16,
    color: "#FFF",
    textAlign: "center",
  },
});
