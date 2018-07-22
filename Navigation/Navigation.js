// Navigation/Navigations.js

import React from 'react'
import { StyleSheet, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'
import Test from '../Components/Test'
import News from '../Components/News'
import Social from '../Components/Social'

const SearchStackNavigator = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Rechercher',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#000032'
            }
        }
    },
    FilmDetail: {
        screen: FilmDetail
    }
})

const FavoritesStackNavigator = createStackNavigator({
    Favorites: {
        screen: Favorites,
        navigationOptions: {
            title: 'Favoris',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#000032'
            }
        }
    },
    FilmDetail: {
        screen: FilmDetail
    }
})

const NewsStackNavigator = createStackNavigator({
    News: {
        screen: News,
        navigationOptions: {
            title: 'Les Derniers Films',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#000032'
            }

        },
    },
    FilmDetail: {
        screen: FilmDetail,
    }
})

const SocialStackNavigator = createStackNavigator({
    Search: {
        screen: Social,
        navigationOptions: {
            title: 'NightClub',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#000032',
            }
        }
    },
    FilmDetail: {
        screen: FilmDetail
    }
})

const TestStackNavigator = createStackNavigator({
    Search: {
        screen: Test,
        navigationOptions: {
            title: 'Test',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#000032'
            }
        }
    }
})

const MoviesTabNavigator = createBottomTabNavigator(
    {
        Search: {
            screen: SearchStackNavigator,
            navigationOptions: {
                tabBarIcon: () => {
                    return <Image
                        source={require('../Images/ic_search.png')}
                        style={styles.icon}/>
                }
            }
        },
        Favorites: {
            screen: FavoritesStackNavigator,
            navigationOptions: {
                tabBarIcon: () => {
                    return <Image
                        source={require('../Images/ic_favorite.png')}
                        style={styles.icon}/>
                }
            }
        },
        News: {
            screen: NewsStackNavigator,
            navigationOptions: {
                tabBarIcon: () => {
                    return <Image
                        source={require('../Images/ic_fiber_new.png')}
                        style={styles.icon}/>
                }
            }
        },
        Social: {
            screen: SocialStackNavigator,
            navigationOptions: {
                tabBarIcon: () => {
                    return <Image
                        source={require('../Images/ic_fiber_new.png')}
                        style={styles.icon}/>
                },
            }
        },
        Test: {
            screen: TestStackNavigator,
            navigationOptions: {
                tabBarIcon: () => {
                    return <Image
                        source={require('../Images/user.png')}
                        style={styles.icon}/>
                },
            }
        }
    },
    {
        tabBarOptions: {
            activeBackgroundColor: '#9F9FEC',
            inactiveBackgroundColor: '#FFFFFF',
            showLabel: true,
            showIcon: true
        }
    },
)

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
})

export default MoviesTabNavigator