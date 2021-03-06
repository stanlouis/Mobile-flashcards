import React from "react";
import { View } from "react-native";

const Card = ({ children }) => {
  return <View style={styles.containerStyle}>{children}</View>;
};

const styles = {
  containerStyle: {
    borderRadius: 2,
    borderWidth: 0.5,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    backgroundColor: "#F5FCFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};
export { Card };
