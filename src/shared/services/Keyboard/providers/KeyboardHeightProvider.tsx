import React, { createContext, useContext, useEffect } from "react";
import { Keyboard } from "react-native";
import {
  SharedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface KeyboardHeightProviderProps {
  children: React.ReactNode;
}

type KeyboardHeightContextType = {
  keyboardHeight: SharedValue<number>;
};

export const KeyboardHeightContext =
  createContext<KeyboardHeightContextType | null>(null);

export const KeyboardHeightProvider = ({
  children,
}: KeyboardHeightProviderProps) => {
  const keyboardHeight = useSharedValue(0);

  useEffect(() => {
    // const willShowSub = Keyboard.addListener("keyboardWillShow", () => {});
    const willHideSub = Keyboard.addListener("keyboardWillHide", () => {
      keyboardHeight.value = withTiming(0, { duration: 250 });
    });
    const didHideSub = Keyboard.addListener("keyboardDidHide", (ev) => {
      keyboardHeight.value = withTiming(0, { duration: 250 });
    });
    const didShowSub = Keyboard.addListener("keyboardDidShow", (ev) => {
      keyboardHeight.value = withTiming(ev.endCoordinates.height, {
        duration: 250,
      });
    });

    return () => {
      // willShowSub.remove();
      willHideSub.remove();
      didShowSub.remove();
      didHideSub.remove();
    };
  }, []);

  return (
    <KeyboardHeightContext.Provider value={{ keyboardHeight }}>
      {children}
    </KeyboardHeightContext.Provider>
  );
};

export const useKeyboardHeight = () => {
  const context = useContext(KeyboardHeightContext);

  if (!context) {
    throw new Error(
      "useKeyboardHeight must be used within a KeyboardHeightProvider"
    );
  }

  return context;
};
