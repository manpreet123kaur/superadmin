import 'react-native-url-polyfill/auto';
import { AppRegistry, Platform } from 'react-native';
import App from './App';

AppRegistry.registerComponent('main', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('main', { rootTag });
}






// import ApppeningScreen from './pages/ApppeningScreen';
// import Chooseplan from './pages/Chooseplan';
// import Method from './pages/Method';
// import Getstarted from './pages/Getstarted';
// import Splashscreen from './pages/Splashscreen';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import Forgotpassword from './pages/Forgotpassword';
// import Resetpassword from './pages/Resetpassword';
// // import Worklet from './pages/Worklet';



// // admin 
// import DrawernavigationA from './Admin/DrawernavigationA';
// import Adminhome from './Admin/Adminhome';
// import Users from './Admin/Users';
// import Userprofile from './Admin/Userprofile';
// import Leaves from './Admin/Leaves';
// import Addleaveforadmin from './Admin/Addleaveforadmin';
// import Holidayschedule from './Admin/Holidayschedule';
// import Attendence from './Admin/Attendence';
// import Overallattendence from './Admin/Overallattendence';