import { Units } from "@Shared/lib/theme";
import { useKeyboardHeight } from "@Shared/services/Keyboard";
import { ThemedView } from "@Shared/ui/ThemedView";
import { PropsWithChildren } from "react";
import { Dimensions, Pressable, StyleSheet } from "react-native";
import Animated, {
  SlideInDown,
  SlideOutDown,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { closeModal } from "../../model/utils/closeModal";

type ModalBottomSheetProps = PropsWithChildren & {
  onClose?: (close: () => void) => void;
};

export const ModalBottomSheet = ({
  onClose,
  children,
}: ModalBottomSheetProps) => {
  const insets = useSafeAreaInsets();
  const { keyboardHeight } = useKeyboardHeight();

  const handlePressClose = () => {
    closeModal(onClose);
  };

  const fakeView = useAnimatedStyle(() => {
    return {
      height: Math.abs(keyboardHeight.value),
    };
  }, []);

  return (
    <>
      <Pressable onPress={handlePressClose} style={[styles.block]} />
      <Animated.View
        exiting={SlideOutDown}
        entering={SlideInDown}
        style={[styles.modal]}
      >
        <ThemedView
          style={[
            styles.container,
            {
              paddingBottom: insets.bottom,
            },
          ]}
        >
          {children}
        </ThemedView>
        <Animated.View style={fakeView} />
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  block: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modal: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    maxHeight: Dimensions.get("window").height * 0.8,
    zIndex: 1000,
  },
  container: {
    flex: 1,
    width: Dimensions.get("window").width,
    borderTopLeftRadius: Math.round(Units.s24),
    borderTopRightRadius: Math.round(Units.s24),
  },
});
