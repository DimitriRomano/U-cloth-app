import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FlashMessage from "react-native-flash-message";
import firebase from "firebase/app";
import "firebase/auth";
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

  
  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  // const firebaseConfig = {
  //   apiKey: "AIzaSyCc-MOP1NlObdgwNv10gPIbR5I3UOLoD_A",
  //   authDomain: "u-cloth.firebaseapp.com",
  //   projectId: "u-cloth",
  //   storageBucket: "u-cloth.appspot.com",
  //   messagingSenderId: "383401157424",
  //   appId: "1:383401157424:web:b3a52c2ba193bf30d11ef5",
  // };

  // if (!firebase.apps.length) {
  //   firebase.initializeApp(firebaseConfig);
  // } else {
  //   firebase.app();
  // }

  // // Listen for authentication state to change.
  // firebase.auth().onAuthStateChanged((user) => {
  //   if (user != null) {
  //     setIsLoggedIn(true)
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  // });

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
          {/* <Stack.Screen name="Login" component={Login} /> */}
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="AddNewAddress" component={AddNewAddress} />
          <Stack.Screen name="ShippingDetails" component={ShippingDetails} />
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="AddANewCard" component={AddANewCard} />
          <Stack.Screen
            name="PasswordHasBeenReset"
            component={PasswordHasBeenReset}
          />
          <Stack.Screen name="Reviews" component={Reviews} />
          <Stack.Screen name="MyAddress" component={MyAddress} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
          <Stack.Screen name="Shop" component={Shop} />
          <Stack.Screen name="NewPassword" component={NewPassword} />
          <Stack.Screen name="Product" component={Product} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="TrackYourOrder" component={TrackYourOrder} />
          <Stack.Screen name="HomeTwo" component={HomeTwo} />
          <Stack.Screen name="MainLayout" component={MainLayout} />
          <Stack.Screen name="Order" component={Order} />
          <Stack.Screen name="VerifyNumber" component={VerifyNumber} />
          <Stack.Screen name="OtpCode" component={OtpCode} />
          <Stack.Screen name="LeaveAReview" component={LeaveAReview} />
          <Stack.Screen name="OrderHistory" component={OrderHistory} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="OrderSuccess" component={OrderSuccess} />
          <Stack.Screen name="SelectPayment" component={SelectPayment} />
          <Stack.Screen name="Filter" component={Filter} />
          <Stack.Screen name="OrderFailed" component={OrderFailed} />
          <Stack.Screen name="MyPromoCodes" component={MyPromoCodes} />
          <Stack.Screen name="AccountCreated" component={AccountCreated} />
        </Stack.Navigator>
        <FlashMessage position="top" />
      </NavigationContainer>
    );
  }
}
