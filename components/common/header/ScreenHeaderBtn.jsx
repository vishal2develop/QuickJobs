import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";

import styles from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, dimensions, handlePress }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="contain"
        style={styles.btnImg(dimensions)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
