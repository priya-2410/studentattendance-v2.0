import { useLogin } from "./LoginProvider";
import DrawerNavigation from "./app/navigators/DrawerNavigation";
import Login from "./app/screens/Login";

const MainNavigator = () => {
  const { isLoggedIn } = useLogin();
  return isLoggedIn ? <DrawerNavigation /> : <Login />;
};
export default MainNavigator;
