import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, router } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		Montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
		"Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
		"Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
		...FontAwesome.font,
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	const colorScheme = useColorScheme();

	return (
		<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
			<Stack>
				<Stack.Screen
					name="(tabs)"
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="(modals)/login"
					options={{
						title: "Log in or Sign up",
						headerTitleStyle: {
							fontFamily: "Montserrat-SemiBold",
						},
						presentation: "modal",
						headerLeft: () => (
							<TouchableOpacity onPress={() => router.back()}>
								<Ionicons
									name="close-outline"
									size={28}
								/>
							</TouchableOpacity>
						),
					}}
				/>
				<Stack.Screen
					name="listings/[id]"
					options={{
						headerTitle: "Listing Details",
					}}
				/>
				<Stack.Screen
					name="(modals)/bookings"
					options={{
						presentation: "transparentModal",
						animation: "fade",
						headerLeft: () => (
							<TouchableOpacity onPress={() => router.back()}>
								<Ionicons
									name="close-outline"
									size={28}
								/>
							</TouchableOpacity>
						),
					}}
				/>
			</Stack>
		</ThemeProvider>
	);
}
