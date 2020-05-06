import * as React from 'react';
import { StatusBar, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Messages from './screens/Messages';
import ProfilePage from './screens/ProfilePage';
import Profile from './screens/Profile';
import ProfileEdit from './screens/ProfileEdit';
import Settings from './screens/Settings';
import Balance from './screens/Balance';
import UserProjects from './screens/UserProjects';
import MyProjects from './screens/MyProjects';
import AllProjects from './screens/AllProjects';
import Favorites from './screens/Favorites';
import Search from './screens/Search';
import Project from './screens/Project';
import Comments from './screens/Comments';
import CreateTopic from './screens/CreateTopic';
import Topic from './screens/Topic';
import CreateComment from './screens/CreateComment';
import CreateProject from './screens/CreateProject';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';

const images = [
	require('./assets/icons/all_projects.png'),
	require('./assets/icons/all_projects_active.png'),
	require('./assets/icons/favorites.png'),
	require('./assets/icons/favorites_active.png'),
	require('./assets/icons/messages.png'),
	require('./assets/icons/messages_active.png'),
	require('./assets/icons/my_projects.png'),
	require('./assets/icons/my_projects_active.png'),
	require('./assets/icons/profile.png'),
	require('./assets/icons/profile_active.png'),
	require('./assets/icons/del.png'),
	require('./assets/icons/done.png'),
	require('./assets/icons/drop.png'),
	require('./assets/icons/drop1.png'),
	require('./assets/icons/edit.png'),
	require('./assets/icons/filter.png'),
	require('./assets/icons/hashtag.png'),
	require('./assets/icons/img.png'),
	require('./assets/icons/img1.png'),
	require('./assets/icons/invoice.png'),
	require('./assets/icons/mastercard.png'),
	require('./assets/icons/pic1.png'),
	require('./assets/icons/pic10.png'),
	require('./assets/icons/pic2.png'),
	require('./assets/icons/pic3.png'),
	require('./assets/icons/pic4.png'),
	require('./assets/icons/pic5.png'),
	require('./assets/icons/pic6.png'),
	require('./assets/icons/pic7.png'),
	require('./assets/icons/pic8.png'),
	require('./assets/icons/pic9.png'),
	require('./assets/icons/play.png'),
	require('./assets/icons/right.png'),
	require('./assets/icons/search.png'),
	require('./assets/icons/settings.png'),
	require('./assets/icons/share.png'),
	require('./assets/icons/uknow.png'),
	require('./assets/icons/visa.png'),
];

export default class App extends React.Component {
	state = {
		isLoadingComplete: false,
	};

	handleResourcesAsync = async () => {
		const cacheImages = images.map((image) => {
			return Asset.fromModule(image).downloadAsync();
		});

		return Promise.all(cacheImages);
	};

	render() {
		if (!this.state.isLoadingComplete) {
			return (
				<AppLoading
					startAsync={this.handleResourcesAsync}
					onError={(error) => console.warn(error)}
					onFinish={() => this.setState({ isLoadingComplete: true })}
				/>
			);
		}
		return (
			<NavigationContainer style={{ backgroundColor: '#FFF' }}>
				<StatusBar barStyle="dark-content" />
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen name="Messages">
						{() => (
							<Tab.Navigator
								screenOptions={({ route }) => ({
									tabBarIcon: ({ focused }) => {
										let iconName;
										let style;

										if (route.name === 'Все проекты') {
											iconName = focused
												? require('./assets/icons/all_projects_active.png')
												: require('./assets/icons/all_projects.png');
											style = { width: 25, height: 25 };
										} else if (route.name === 'Избранное') {
											iconName = focused
												? require('./assets/icons/favorites_active.png')
												: require('./assets/icons/favorites.png');
											style = { width: 25, height: 25 };
										} else if (route.name === 'Сообщения') {
											iconName = focused
												? require('./assets/icons/messages_active.png')
												: require('./assets/icons/messages.png');
											style = { width: 25, height: 25 };
										} else if (route.name === 'Мои проекты') {
											iconName = focused
												? require('./assets/icons/my_projects_active.png')
												: require('./assets/icons/my_projects.png');
											style = { width: 25, height: 25 };
										} else if (route.name === 'Профиль') {
											iconName = focused
												? require('./assets/icons/profile_active.png')
												: require('./assets/icons/profile.png');
											style = { width: 25, height: 25 };
										}

										return <Image source={iconName} style={style} />;
									},
								})}
								tabBarOptions={{
									style: {
										backgroundColor: '#FFFFFF',
										position: 'absolute',
										bottom: -1,
										padding: 5,
										height: Platform.OS === 'android' ? '7.5%' : '9.5%',
										zIndex: 8,
										borderTopColor: '#BBC5D0',
										borderTopWidth: 1,
									},
									activeTintColor: '#5238F2',
									inactiveTintColor: '#BBC5D0',
									labelStyle: {
										fontSize: 9,
										bottom: '10%'
									  },
								}}
							>
								<Tab.Screen name="Все проекты" component={AllProjects}/>
								<Tab.Screen name="Избранное" component={Favorites}/>
								<Tab.Screen name="Сообщения" component={Messages} />
								<Tab.Screen name="Мои проекты" component={MyProjects} />
								<Tab.Screen name="Профиль" component={Profile} />
							</Tab.Navigator>
						)}
					</Stack.Screen>
					<Stack.Screen name="ProfilePage" component={ProfilePage} />
					<Stack.Screen name="ProfileEdit" component={ProfileEdit} />
					<Stack.Screen name="Settings" component={Settings} />
					<Stack.Screen name="Balance" component={Balance} />
					<Stack.Screen name="UserProjects" component={UserProjects} />
					<Stack.Screen name="Search" component={Search} />
					<Stack.Screen name="Project" component={Project} />
					<Stack.Screen name="Comments" component={Comments} />
					<Stack.Screen name="CreateTopic" component={CreateTopic} />
					<Stack.Screen name="Topic" component={Topic} />
					<Stack.Screen name="CreateComment" component={CreateComment} />
					<Stack.Screen name="CreateProject" component={CreateProject} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}
