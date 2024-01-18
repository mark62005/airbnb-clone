import { Tabs } from "expo-router";
import { FontAwesome5, FontAwesome6, Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const Layout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors.primary,
				tabBarLabelStyle: {
					fontFamily: "Montserrat-SemiBold",
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					tabBarLabel: "Explore",
					tabBarIcon: ({ color, size }) => (
						<FontAwesome5
							name="search"
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="wishlists"
				options={{
					tabBarLabel: "Wishlists",
					tabBarIcon: ({ color, size }) => (
						<FontAwesome5
							name="heart"
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="trips"
				options={{
					tabBarLabel: "Trips",
					tabBarIcon: ({ color, size }) => (
						<FontAwesome6
							name="airbnb"
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="inbox"
				options={{
					tabBarLabel: "Inbox",
					tabBarIcon: ({ color, size }) => (
						<FontAwesome6
							name="message"
							color={color}
							size={size}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					tabBarLabel: "Profile",
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name="person-circle-outline"
							color={color}
							size={size}
						/>
					),
				}}
			/>
		</Tabs>
	);
};
export default Layout;
