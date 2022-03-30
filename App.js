import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FlashMessage from "react-native-flash-message";

import {
  OnBoarding,
  SignIn,
  MainLayout,
  SignUp,
  Order,
  AccountCreated,
  VerifyNumber,
  OtpCode,
  Filter,
  MyPromoCodes,
  SelectPayment,
  OrderSuccess,
  OrderFailed,
  EditProfile,
  Profile,
  OrderHistory,
  Search,
  LeaveAReview,
  Reviews,
  Product,
  Shop,
  HomeTwo,
  TrackYourOrder,
  Checkout,
  ShippingDetails,
  ForgotPassword,
  PasswordHasBeenReset,
  NewPassword,
  AddNewAddress,
  MyAddress,
  PaymentMethod,
  AddANewCard,
} from "./src/screens";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Mulish_400Regular: require("./src/fonts/Mulish-Regular.ttf"),
    Mulish_600SemiBold: require("./src/fonts/Mulish-SemiBold.ttf"),
    Mulish_700Bold: require("./src/fonts/Mulish-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            },
            headerShown: false,
          }}
          initialRouteName="OnBoarding"
        >
          <Stack.Screen name="OnBoarding" component={OnBoarding} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
        <FlashMessage position="top" />
      </NavigationContainer>
    );
  }
}
