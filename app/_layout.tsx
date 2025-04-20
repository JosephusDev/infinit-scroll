import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'react-native-reanimated';
import { useFonts as useGoogleFonts, Nunito_400Regular, Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
import { Feather } from '@expo/vector-icons';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export default function RootLayout() {
  const [fontsLoaded] = useGoogleFonts({
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });


  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <RootLayoutNav />
    </QueryClientProvider>
  );
}

function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        title: 'Lista de produtos',
        headerStyle: {
          backgroundColor: '#f5f5f5',
        },
        headerTitleStyle: {
          fontFamily: 'Nunito_800ExtraBold',
          color: '#9956F6',
        },
        headerLeft: () => (
          <Feather name="shopping-cart" size={20} color="#9956F6" />
        ),
        headerTitleAlign: 'center',
      }} />
    </Stack>
  );
}
