import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

const ListingPage = () => {
	const { id } = useLocalSearchParams<{ id: string }>();

	return (
		<View>
			<Text>ListingPage: {id}</Text>
		</View>
	);
};
export default ListingPage;
