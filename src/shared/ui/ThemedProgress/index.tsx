import { useEffect } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useThemeColor } from "../../lib/theme";
import { Units } from "../../lib/theme/const/Units";
import { ThemedView } from "../ThemedView";

interface ThemedProgressProps {
  value?: number;
  limit?: number;
}

export const ThemedProgress = ({
  value = 0,
  limit = 0,
}: ThemedProgressProps) => {
  const percentage = limit === 0 ? 0 : Math.min(value / limit, 1);

  const backgroundColor = useThemeColor({}, "border");
  const fillColor = useThemeColor({}, "danger");

  const progress = useSharedValue(percentage);

  useEffect(() => {
    progress.value = withTiming(percentage, { duration: 300 });
  }, [percentage]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${progress.value * 100}%`,
  }));

  return (
    <ThemedView style={[styles.container, { backgroundColor }]}>
      <ThemedView
        as={Animated.View}
        style={[styles.fill, animatedStyle, { backgroundColor: fillColor }]}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Units.s10,
    borderRadius: Math.round(Units.s10 / 2),
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    borderRadius: Math.round(Units.s10 / 2),
  },
});
