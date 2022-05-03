import React from "react";
import { Provider as PaperProvider } from 'react-native-paper';
import AppNavigation from "./AppNavigation"
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();//Ignore all log notifications

export default function App() {
  return (
        <PaperProvider>
          <AppNavigation />
        </PaperProvider>
  );
}