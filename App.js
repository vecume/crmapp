import React, { useEffect } from "react";
import { WebView } from "react-native-webview";
import { Alert, BackHandler, StatusBar } from "react-native";

export default function App() {

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Подождите!", "Вы уверены, что хотите закрыт?", [
        {
          text: "Отмена",
          onPress: () => null,
          style: "cancel"
        },
        { text: "ДА", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <>
      <StatusBar barStyle="default" />
      <WebView
        source={{ uri: "https://dc.softcity.uz" }}
      />
    </>
  );
}
