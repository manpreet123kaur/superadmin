
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRegistry, StyleSheet } from 'react-native'

// pages 
import ApppeningScreen from './pages/ApppeningScreen';
import Chooseplan from './pages/Chooseplan';
import Method from './pages/Method';
import Getstarted from './pages/Getstarted';
import Splashscreen from './pages/Splashscreen';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Resetpassword from './pages/Resetpassword';
// // superadmin 
import DrawernavigationS from './Superadmin/DrawernavigationS';
import Home from './Superadmin/Home';
import Admindetail from './Superadmin/Admindetail';
import Adminprofile from './Superadmin/Adminprofile';
import Subscription from './Superadmin/Subscription';
import Contentupdate from './Superadmin/Contentupdate';
import ViewProfile from './Superadmin/ViewProfile';
import Profiledit from './Superadmin/Profiledit';
// admin 
import Adrawernavigation from './Admin/Adrawernavigation';
import HomeAdmin from './Admin/HomeAdmin';
import Users from './Admin/Users';
import Userprofile from './Admin/Userprofile';
import Appliedleaves from './Admin/Appliedleaves';
import Leaves from './Admin/Leaves';
import Holidays from './Admin/Holidays';
import AAtendence from './Admin/AAtendence';
import Totalemployee from './Admin/Totalemployee';
import Expense from './Admin/Expense';
import Teammanage from './Admin/Teammanage';
import Teamdetail from './Admin/Teamdetail';
import Usersprofileforproject from './Admin/Usersprofileforproject';
import Performance from './Admin/Performance';
import Adminsprofile from './Admin/Adminsprofile';
// hr 
import DrawernavigationH from './Hr/DrawernavigationH';
import Homehr from './Hr/Homehr';
import UsersH from './Hr/UsersH'
import Addnewuser from './Hr/Addnewuser';
import Employeesprofile from './Hr/Employeesprofile';
import Workmanagment from './Hr/Workmanagment';
import Performancecalculator from './Hr/Performancecalculator';
import PerformanceH from './Hr/PerformanceH';
import Recruitment from './Hr/Recruitment';
import Leaveshr from './Hr/Leaveshr';
import Appliedleave from './Hr/Appliedleave';
import Interviewschedule from './Hr/Interviewschedule';
import Recentvacany from './Hr/Recentvacany';
import Frontendvacanies from './Hr/Frontendvacanies';
import SCOvacancy from './Hr/SCOvacancy';
import Digitalmarket from './Hr/Digitalmarket';
import Graphicdsign from './Hr/Graphicdsign';
import Backend from './Hr/Backend';
import Software from './Hr/Software';
import Videoediting from './Hr/Videoediting';
import Reports from './Hr/Reports';
import LeaveStatus from './Hr/LeaveStatus';
import AddinterviewH from './Hr/AddinterviewH';
import Humanresource from './Hr/Humanresource';
// user 
import DrawernavigationU from './User/DrawernavigationU'
import Employeehome from './User/Employeehome';
import Profile from './User/Profile';
import Editprofile from './User/Editprofile';
import AttendenceU from './User/AttendenceU';
import PerformanceU from './User/PerformanceU';
import Addleave from './User/Addleave';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* pages  */}
        {/* <Stack.Screen name='ApppeningScreen' component={ApppeningScreen} />
        <Stack.Screen name='Chooseplan' component={Chooseplan} />
        <Stack.Screen name='Method' component={Method} />
        <Stack.Screen name='Getstarted' component={Getstarted} />
        <Stack.Screen name='Splashscreen' component={Splashscreen} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Forgotpassword' component={Forgotpassword} />
        <Stack.Screen name='Resetpassword' component={Resetpassword} />
        {/* superadmin  */}
        {/* <Stack.Screen name='DrawernavigationS' component={DrawernavigationS} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Admindetail' component={Admindetail} />
        <Stack.Screen name='Adminprofile' component={Adminprofile} />
        <Stack.Screen name='Subscription' component={Subscription} />
        <Stack.Screen name='Contentupdate' component={Contentupdate} />
        <Stack.Screen name='ViewProfile' component={ViewProfile} />
        <Stack.Screen name='Profiledit' component={Profiledit} />
        {/* admin  */}
        {/* <Stack.Screen name='Adrawernavigation' component={Adrawernavigation} />
        <Stack.Screen name='HomeAdmin' component={HomeAdmin} />
        <Stack.Screen name='Users' component={Users} />
        <Stack.Screen name='Userprofile' component={Userprofile} />
        <Stack.Screen name='Appliedleaves' component={Appliedleaves} />
        <Stack.Screen name='Leaves' component={Leaves} />
        <Stack.Screen name='Holidays' component={Holidays} />
        <Stack.Screen name='AAtendence' component={AAtendence} />
        <Stack.Screen name='Totalemployee' component={Totalemployee} />
        <Stack.Screen name='Expense' component={Expense} />
        <Stack.Screen name='Teammanage' component={Teammanage} />
        <Stack.Screen name='Teamdetail' component={Teamdetail} />
        <Stack.Screen name='Usersprofileforproject' component={Usersprofileforproject} />
        <Stack.Screen name='Performance' component={Performance} />
        <Stack.Screen name='Adminsprofile' component={Adminsprofile} />  */}
        {/* hr  */}
        {/* <Stack.Screen name='DrawernavigationH' component={DrawernavigationH} />
          <Stack.Screen name='Homehr' component={Homehr} />
          <Stack.Screen name='Users' component={UsersH} />
          <Stack.Screen name='Addnewuser' component={Addnewuser} />
          <Stack.Screen name='Employeesprofile' component={Employeesprofile} />
          <Stack.Screen name='Workmanagment' component={Workmanagment} />
          <Stack.Screen name='Performancecalculator' component={Performancecalculator} />
          <Stack.Screen name='PerformanceH' component={PerformanceH} />
          <Stack.Screen name='Recruitment' component={Recruitment} />
          <Stack.Screen name='Leaveshr' component={Leaveshr} />
          <Stack.Screen name='Appliedleave' component={Appliedleave} />
          <Stack.Screen name='Interviewschedule' component={Interviewschedule} />
          <Stack.Screen name='Recentvacany' component={Recentvacany} />
          <Stack.Screen name='Frontendvacanies' component={Frontendvacanies} />
          <Stack.Screen name='SCOvacancy' component={SCOvacancy} />
          <Stack.Screen name='Digitalmarket' component={Digitalmarket} />
          <Stack.Screen name='Graphicdsign' component={Graphicdsign} />
          <Stack.Screen name='Backend' component={Backend} />
          <Stack.Screen name='Software' component={Software} />
          <Stack.Screen name='Videoediting' component={Videoediting} />
          <Stack.Screen name='Reports' component={Reports} />
          <Stack.Screen name='LeaveStatus' component={LeaveStatus} />
          <Stack.Screen name='AddinterviewH' component={AddinterviewH} />
          <Stack.Screen name='Humanresource' component={Humanresource} /> */}
        {/* User  */}
        {/* <Stack.Screen name='DrawernavigationU' component={DrawernavigationU} />
        <Stack.Screen name='Employeehome' component={Employeehome} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='Editprofile' component={Editprofile} />
        <Stack.Screen name='AttendenceU' component={AttendenceU} />
        <Stack.Screen name='PerformanceU' component={PerformanceU} />
        <Stack.Screen name='Addleave' component={Addleave} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent('YourAppName', () => App);
