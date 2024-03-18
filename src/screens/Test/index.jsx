import { View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { user } from "../../data/Profile";

export default function Test() {
  return (
    <View style={styles.container}>
      <Title title="Test" />

      <TouchButton route="Test" title="Go to Test" />

      <TouchButton route="Profile" title="Go to Profile" data={user} />
    </View>
  );
}
