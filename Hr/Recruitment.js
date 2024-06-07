import React, { useState } from 'react';
import { useFonts } from "expo-font";
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faCircleXmark, faUsers, faAddressBook, faChalkboardUser, faArrowLeftLong, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { TextInput } from 'react-native-paper';

const Recruitment = ({ navigation }) => {
    const [applicants, setapplicants] = useState(true)
    const [Shortlisted, setShortlisted] = useState(false)
    const [Onboarded, setOnboarded] = useState(false)
    const [Rejected, setRejected] = useState(false)

    const [Activity, setActivity] = useState(false);

    const toggleActivity = () => {
        setActivity(!Activity);
    };

    const fisrt = () => {
        setapplicants(true)
        setShortlisted(false)
        setOnboarded(false)
        setRejected(false)
    }

    const second = () => {
        setapplicants(false)
        setShortlisted(true)
        setOnboarded(false)
        setRejected(false)
    }

    const third = () => {
        setapplicants(false)
        setShortlisted(false)
        setOnboarded(true)
        setRejected(false)
    }

    const fourth = () => {
        setapplicants(false)
        setShortlisted(false)
        setOnboarded(false)
        setRejected(true)
    }
    const data = [
        { email: '(+5) text' },
        { email: '(+5) text' },
        { email: '(+5) text' },
        { email: '(+5) text' }
    ];
    const renderRows = () => {
        return data.map((item, index) => (
            <View key={index} style={{ flexDirection: 'row', width: '100%', backgroundColor: item.backgroundColor, padding: 4, }}>
                <View style={{ width: '33%' }}>
                    <Text style={{ fontFamily: 'mainFont', textAlign: 'center', padding: 6, fontSize: 12 }}>Front End Developer</Text>
                </View>
                <View style={{ width: '33%', textAlign: 'center' }}>
                    <Text style={{ fontFamily: 'mainFont', textAlign: 'center', padding: 6, fontSize: 12, width: '100%' }}>{"+5"}</Text>
                </View>
                <View style={{ width: '33%', }}>
                    <Text style={{ fontFamily: 'mainFont', textAlign: 'center', padding: 6, fontSize: 12 }}>Mohali</Text>
                </View>
            </View>
        ));
    };

    const [fontsLoaded] = useFonts({
        mainFont: require("../assets/fonts/Metropolis-Medium.otf")  
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (

        <>
            <ScrollView>
                <View style={{ paddingBottom: 30, backgroundColor: 'white' }}>
                    
                    <View style={{ padding: 15, borderWidth: 1, width: '96%', alignSelf: 'center', borderColor: 'lightgrey', borderRadius: 12, margin: 10 }}>
                        <View style={{}}>
                            <Text style={{ fontSize: 16, fontFamily: 'mainFont', padding: 8 }}>Overview</Text>
                            <Text style={{ fontSize: 14, fontFamily: 'mainFont', padding: 8, color: 'grey' }}>Recruitment overview of this month</Text>
                        </View>

                        <View style={{ flexDirection: 'row', width: '96%', marginBottom: 10 }}>
                            <TouchableOpacity style={{ flexDirection: 'row', width: '48%', backgroundColor: '#E6E6FA', borderRadius: 12, marginRight: 10, marginTop: 15, padding: 10 }} onPress={fisrt}>
                                <View style={{ padding: 8, width: '80%' }}>
                                    <Text style={{ fontSize: 19, fontFamily: 'mainFont', paddingBottom: 8, color: '#233CBF' }}>150</Text>
                                    <Text style={{ fontSize: 13, fontFamily: 'mainFont', color: 'grey' }}>Applicants</Text>
                                </View>
                                <View style={{ padding: 8, width: '20%' }}>
                                    <FontAwesomeIcon size={20} color={'#233CBF'} icon={faAddressBook} />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', width: '48%', backgroundColor: '#fdf1cb', borderRadius: 12, marginLeft: 10, marginTop: 15, padding: 10 }} onPress={second}>
                                <View style={{ padding: 8, width: '80%' }}>
                                    <Text style={{ fontSize: 19, fontFamily: 'mainFont', paddingBottom: 8, color: '#F39200' }}>80</Text>
                                    <Text style={{ fontSize: 13, fontFamily: 'mainFont', color: 'grey' }}>Shortlisted</Text>
                                </View>
                                <View style={{ padding: 8, width: '20%' }}>
                                    <FontAwesomeIcon size={20} color={'#F39200'} icon={faUsers} />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', width: '96%', marginBottom: 10 }}>
                            <TouchableOpacity style={{ flexDirection: 'row', width: '48%', backgroundColor: '#B7E4C7', borderRadius: 12, marginRight: 10, marginTop: 15, padding: 10 }} onPress={third}>
                                <View style={{ padding: 8, width: '80%' }}>
                                    <Text style={{ fontSize: 19, fontFamily: 'mainFont', paddingBottom: 8, color: '#3DAC78' }}>10</Text>
                                    <Text style={{ fontSize: 13, fontFamily: 'mainFont', color: 'grey' }}>Onboarded</Text>
                                </View>
                                <View style={{ padding: 8, width: '20%' }}>
                                    <FontAwesomeIcon size={20} color={'#3DAC78'} icon={faChalkboardUser} />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flexDirection: 'row', width: '48%', backgroundColor: '#fbc4ab', borderRadius: 12, marginLeft: 10, marginTop: 15, padding: 10 }} onPress={fourth}>
                                <View style={{ padding: 8, width: '80%' }}>
                                    <Text style={{ fontSize: 19, fontFamily: 'mainFont', paddingBottom: 8, color: '#E25858' }}>20</Text>
                                    <Text style={{ fontSize: 13, fontFamily: 'mainFont', color: 'grey' }}>Rejected</Text>
                                </View>
                                <View style={{ padding: 8, width: '20%' }}>
                                    <FontAwesomeIcon size={20} color={'#E25858'} icon={faCircleXmark} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={{ width: '95%', padding: 15, alignSelf: 'center', alignItems: 'center' }}>
                        <View style={{ width: '100%', flexDirection: 'row', alignSelf: 'center' }}>
                            <View style={{ width: '80%' }}>
                                <Text style={{ fontSize: 15, fontFamily: 'mainFont', paddingBottom: 8 }}>Activity</Text>
                            </View>
                            <TouchableOpacity style={{ width: '20%' }} onPress={toggleActivity}>
                                <Text style={{ fontSize: 16, fontFamily: 'mainFont', paddingBottom: 8, color: '#233CBF' }}>See all</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ width: '90%', borderWidth: 1, borderColor: 'lightgrey', borderRadius: 12, margin: 10, paddingBottom: 10, alignSelf: 'center' }}>

                        {
                            applicants && (
                                <>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 6 }}>
                                        <View style={{ width: '10%', marginLeft: 10 }}>
                                            <View style={{ width: 35, height: 35, backgroundColor: '#E6E6FA' }}>
                                                <Text style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: '#233CBF', marginTop: 11, marginLeft: 10 }}></Text>
                                            </View>
                                        </View>
                                        <View style={{ width: '65%', margin: 6, marginLeft: 15 }}>
                                            <Text style={{ fontSize: 12, fontFamily: 'mainFont', paddingBottom: 8, color: 'grey' }} >4 new applicants for front end developer.</Text>
                                        </View>
                                        <View style={{ width: '25%', marginRight: 6 }}>
                                            <Text style={{ fontSize: 12, fontFamily: 'mainFont', paddingBottom: 8, color: 'grey' }} >4:06 p.m</Text>
                                        </View>
                                    </View>

                                </>
                            )
                        }

                        {
                            Shortlisted && (
                                <View style={{ flexDirection: 'row', alignItems: 'center', margin: 6 }}>
                                    <View style={{ width: '10%', marginLeft: 10 }}>
                                        <View style={{ width: 35, height: 35, backgroundColor: '#fdf1cb' }}>
                                            <Text style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: '#F39200', marginTop: 11, marginLeft: 10 }}></Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '65%', margin: 6, marginLeft: 15 }}>
                                        <Text style={{ fontSize: 12, fontFamily: 'mainFont', paddingBottom: 8, color: 'grey' }} >You have updated the job post for Jr. Software developer.</Text>
                                    </View>
                                    <View style={{ width: '25%', marginRight: 6 }}>
                                        <Text style={{ fontSize: 12, fontFamily: 'mainFont', paddingBottom: 8, color: 'grey' }} >4:06 p.m</Text>
                                    </View>
                                </View>
                            )
                        }

                        {
                            Onboarded && (
                                <View style={{ flexDirection: 'row', alignItems: 'center', margin: 6 }}>
                                    <View style={{ width: '10%', marginLeft: 10 }}>
                                        <View style={{ width: 35, height: 35, backgroundColor: '#B7E4C7' }}>
                                            <Text style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: '#3DAC78', marginTop: 11, marginLeft: 10 }}></Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '65%', margin: 6, marginLeft: 15 }}>
                                        <Text style={{ fontSize: 12, fontFamily: 'mainFont', paddingBottom: 8, color: 'grey' }} >You have updated the job post for Jr. Software developer.</Text>
                                    </View>
                                    <View style={{ width: '25%', marginRight: 6 }}>
                                        <Text style={{ fontSize: 12, fontFamily: 'mainFont', paddingBottom: 8, color: 'grey' }} >4:06 p.m</Text>
                                    </View>
                                </View>
                            )
                        }

                        {
                            Rejected && (
                                <View style={{ flexDirection: 'row', alignItems: 'center', margin: 6 }}>
                                    <View style={{ width: '10%', marginLeft: 10 }}>
                                        <View style={{ width: 35, height: 35, backgroundColor: '#fbc4ab' }}>
                                            <Text style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: '#E25858', marginTop: 11, marginLeft: 10 }}></Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '65%', margin: 6, marginLeft: 15 }}>
                                        <Text style={{ fontSize: 12, fontFamily: 'mainFont', paddingBottom: 8, color: 'grey' }} >You have updated the job post for Jr. Software developer.</Text>
                                    </View>
                                    <View style={{ width: '25%', marginRight: 6 }}>
                                        <Text style={{ fontSize: 12, fontFamily: 'mainFont', paddingBottom: 8, color: 'grey' }} >4:06 p.m</Text>
                                    </View>
                                </View>
                            )
                        }
                        {
                            Activity && (

                                <>
                                    <View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 6 }}>
                                            <View style={{ width: '10%', marginLeft: 10 }}>
                                                <View style={{ width: 35, height: 35, backgroundColor: '#E6E6FA' }}>
                                                    <Text style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: '#233CBF', marginTop: 11, marginLeft: 10 }}></Text>
                                                </View>
                                            </View>
                                            <View style={{ width: '65%', margin: 6, marginLeft: 15 }}>
                                                <Text style={{ fontSize: 12, fontFamily: 'mainFont', paddingBottom: 8, color: 'grey' }} >4 new applicants for front end developer.</Text>
                                            </View>
                                            <View style={{ width: '25%', marginRight: 6 }}>
                                                <Text style={{ fontSize: 12, fontFamily: 'mainFont', paddingBottom: 8, color: 'grey' }} >4:06 p.m</Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 6 }}>
                                            <View style={{ width: '10%', marginLeft: 10 }}>
                                                <View style={{ width: 35, height: 35, backgroundColor: '#fbc4ab' }}>
                                                    <Text style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: '#E25858', marginTop: 11, marginLeft: 10 }}></Text>
                                                </View>
                                            </View>
                                            <View style={{ width: '65%', margin: 6, marginLeft: 15 }}>
                                                <Text style={{ fontSize: 12, fontFamily: 'mainFont', paddingBottom: 8, color: 'grey' }} >You have updated the job post for Jr. Software developer.</Text>
                                            </View>
                                            <View style={{ width: '25%', marginRight: 6 }}>
                                                <Text style={{ fontSize: 12, fontFamily: 'mainFont', paddingBottom: 8, color: 'grey' }} >4:06 p.m</Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 6 }}>
                                            <View style={{ width: '10%', marginLeft: 10 }}>
                                                <View style={{ width: 35, height: 35, backgroundColor: '#fdf1cb' }}>
                                                    <Text style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: '#F39200', marginTop: 11, marginLeft: 10 }}></Text>
                                                </View>
                                            </View>
                                            <View style={{ width: '65%', margin: 6, marginLeft: 15 }}>
                                                <Text style={{ fontSize: 12, fontFamily: 'mainFont', paddingBottom: 8, color: 'grey' }} >You have updated the job post for Jr. Software developer.</Text>
                                            </View>
                                            <View style={{ width: '25%', marginRight: 6 }}>
                                                <Text style={{ fontSize: 12, fontFamily: 'mainFont', paddingBottom: 8, color: 'grey' }} >4:06 p.m</Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 6 }}>
                                            <View style={{ width: '10%', marginLeft: 10 }}>
                                                <View style={{ width: 35, height: 35, backgroundColor: '#E6E6FA' }}>
                                                    <Text style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: '#233CBF', marginTop: 11, marginLeft: 10 }}></Text>
                                                </View>
                                            </View>
                                            <View style={{ width: '65%', margin: 6, marginLeft: 15 }}>
                                                <Text style={{ fontSize: 12, fontFamily: 'mainFont', paddingBottom: 8, color: 'grey' }} >4 new applicants for front end developer.</Text>
                                            </View>
                                            <View style={{ width: '25%', marginRight: 6 }}>
                                                <Text style={{ fontSize: 12, fontFamily: 'mainFont', paddingBottom: 8, color: 'grey' }} >4:06 p.m</Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 6 }}>
                                            <View style={{ width: '10%', marginLeft: 10 }}>
                                                <View style={{ width: 35, height: 35, backgroundColor: '#fdf1cb' }}>
                                                    <Text style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: '#F39200', marginTop: 11, marginLeft: 10 }}></Text>
                                                </View>
                                            </View>
                                            <View style={{ width: '65%', margin: 6, marginLeft: 15 }}>
                                                <Text style={{ fontSize: 12, fontFamily: 'mainFont', paddingBottom: 8, color: 'grey' }} >You have updated the job post for Jr. Software developer.</Text>
                                            </View>
                                            <View style={{ width: '25%', marginRight: 6 }}>
                                                <Text style={{ fontSize: 12, fontFamily: 'mainFont', paddingBottom: 8, color: 'grey' }} >4:06 p.m</Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', margin: 6 }}>
                                            <View style={{ width: '10%', marginLeft: 10 }}>
                                                <View style={{ width: 35, height: 35, backgroundColor: '#fbc4ab' }}>
                                                    <Text style={{ width: 14, height: 14, borderRadius: 7, backgroundColor: '#E25858', marginTop: 11, marginLeft: 10 }}></Text>
                                                </View>
                                            </View>
                                            <View style={{ width: '65%', margin: 6, marginLeft: 15 }}>
                                                <Text style={{ fontSize: 12, fontFamily: 'mainFont', paddingBottom: 8, color: 'grey' }} >You have updated the job post for Jr. Software developer.</Text>
                                            </View>
                                            <View style={{ width: '25%', marginRight: 6 }}>
                                                <Text style={{ fontSize: 12, fontFamily: 'mainFont', paddingBottom: 8, color: 'grey' }} >4:06 p.m</Text>
                                            </View>
                                        </View>

                                    </View>
                                </>
                            )
                        }
                    </View>

                    <View style={{ width: '95%', padding: 10, alignSelf: 'center', alignItems: 'center' }}>
                        <View style={{ width: '100%', flexDirection: 'row', alignSelf: 'center' }}>
                            <View style={{ width: '80%' }}>
                                <Text style={{ fontSize: 15, fontFamily: 'mainFont', paddingBottom: 8 }}>Interviews</Text>
                            </View>
                            <TouchableOpacity style={{ width: '20%' }} onPress={() => navigation.navigate("Interviewschedule")}>
                                <Text style={{ fontSize: 16, fontFamily: 'mainFont', paddingBottom: 8, color: '#233CBF' }}>See all</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: '95%', borderWidth: 1, borderColor: 'lightgrey', borderRadius: 12, margin: 10, paddingBottom: 10 }}>

                            <Text style={{ paddingTop: 14, fontFamily: 'mainFont', color: 'grey', paddingLeft: 30, marginBottom: 15 }}>Today</Text>

                            <View>
                                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ marginLeft: 10, width: '10%' }}>
                                        <Text style={{ height: 40, backgroundColor: '#E25858', width: 6, borderRadius: 3, margin: 7, alignItems: 'center' }}></Text>
                                    </View>
                                    <View style={{ margin: 10, width: '60%' }}>
                                        <Text style={{ fontFamily: 'mainFont', fontSize: 13, color: 'grey' }}>UI/UX Engineer</Text>
                                        <Text style={{ fontFamily: 'mainFont', fontSize: 12 }}>Onboarding</Text>
                                    </View>
                                    <View style={{ justifyContent: 'flex-end', width: '15%' }}>
                                        <Text style={{ fontFamily: 'mainFont', fontSize: 13, color: 'grey', textAlign: 'right' }}>01 Mar</Text>
                                    </View>
                                </View>

                            </View>
                            <Text style={{ paddingTop: 14, fontFamily: 'mainFont', color: 'grey', paddingLeft: 30, marginBottom: 15 }}>Upcoming</Text>

                            <View>
                                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ marginLeft: 10, width: '10%' }}>
                                        <Text style={{ height: 40, backgroundColor: '#76CD58', width: 6, borderRadius: 3, margin: 7, alignItems: 'center' }}></Text>
                                    </View>
                                    <View style={{ margin: 10, width: '60%' }}>
                                        <Text style={{ fontFamily: 'mainFont', fontSize: 13, color: 'grey' }}>QA Engineer</Text>
                                        <Text style={{ fontFamily: 'mainFont', fontSize: 12 }}>Send task</Text>
                                    </View>
                                    <View style={{ justifyContent: 'flex-end', width: '15%' }}>
                                        <Text style={{ fontFamily: 'mainFont', fontSize: 13, color: 'grey', textAlign: 'right' }}>05 Mar</Text>
                                    </View>
                                </View>

                            </View>
                            <View>
                                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ marginLeft: 10, width: '10%' }}>
                                        <Text style={{ height: 40, backgroundColor: '#F39200', width: 6, borderRadius: 3, margin: 7, alignItems: 'center' }}></Text>
                                    </View>
                                    <View style={{ margin: 10, width: '60%' }}>
                                        <Text style={{ fontFamily: 'mainFont', fontSize: 13, color: 'grey' }}>Software Engineer</Text>
                                        <Text style={{ fontFamily: 'mainFont', fontSize: 12 }}>Technical Interview</Text>
                                    </View>
                                    <View style={{ justifyContent: 'flex-end', width: '15%' }}>
                                        <Text style={{ fontFamily: 'mainFont', fontSize: 13, color: 'grey', textAlign: 'right' }}>06 Mar</Text>
                                    </View>
                                </View>

                            </View>
                        </View>
                    </View>

                    <View style={{ padding: 10, width: '100%' }}>
                        <View style={{ width: '95%', padding: 10, alignSelf: 'center', alignItems: 'center' }}>
                            <View style={{ width: '100%', flexDirection: 'row', alignSelf: 'center' }}>
                                <View style={{ width: '80%' }}>
                                    <Text style={{ fontSize: 15, fontFamily: 'mainFont', paddingBottom: 8 }}>Recent Jobs</Text>
                                </View>
                                <TouchableOpacity style={{ width: '20%' }} onPress={() => navigation.navigate("Recentvacany")}>
                                    <Text style={{ fontSize: 16, fontFamily: 'mainFont', paddingBottom: 8, color: '#233CBF' }}>See all</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 12, width: '90%', alignSelf: 'center' }}>
                            <View style={{ width: '95%', margin: 10, paddingBottom: 10 }}>
                                <View style={{ width: '100%', padding: 15, flexDirection: 'row' }}>
                                    <View style={{ width: '33%', margin: 3 }}>
                                        <Text style={{ fontSize: 14, fontFamily: 'mainFont' }}>Job Title</Text>
                                    </View>
                                    <View style={{ width: '33%', margin: 3 }}>
                                        <Text style={{ fontSize: 14, fontFamily: 'mainFont' }}>Applicants</Text>
                                    </View>
                                    <View style={{ width: '33%', margin: 3 }}>
                                        <Text style={{ fontSize: 14, fontFamily: 'mainFont' }}>Locations</Text>
                                    </View>
                                </View>
                            </View>


                            <View style={{ width: '98%', alignSelf: 'center', padding: 5 }}>
                                {renderRows()}
                            </View>

                        </View>
                    </View>

                </View>
            </ScrollView >
        </>
    )
}

export default Recruitment;