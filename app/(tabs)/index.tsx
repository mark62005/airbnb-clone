import { Link } from "expo-router";
import { View } from "react-native";

const IndexPage = () => {
	return (
		<View>
			<Link href={"/(modals)/login"}>Login</Link>
			<Link href={"/(modals)/bookings"}>Bookings</Link>
			<Link href={"/listings/1337"}>Listing details</Link>
		</View>
	);
};
export default IndexPage;
