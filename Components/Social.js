// Components/Social.js

import React,{ Component } from 'react'
import {getInformationsByName, getMasteriesByID, getProfilIconById} from '../API/RIOTAPI'
import Summoner from "./Summoner";
import {ActivityIndicator, Image, StyleSheet, Text, View} from "react-native";
import {connect} from "react-redux";

class Social extends Component {
    constructor(props) {
        super(props)

        this.state = {
            player: '',
            isLoading: false,
            playerLoading: true,
            iconUrl:''
        }
    }

    componentDidMount() {
        if(this.state.playerLoading ==true ){
            this._loadPlayer()
        }
    }

    _loadPlayer() {
        var name = "nightofluna"
        this.setState({ isLoading: true })
        getInformationsByName(name).then(data => {
            this.setState({
                player: data,
                isLoading: false,
                playerLoading:false
            })
        })

    }

    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }

    render() {
        return (
            <View style={styles.main_container}>
                <Summoner playerData={this.state.player}/>
                {this._displayLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bigTitle:{
        flex: 1,
        fontSize:50
    }
})


export default Social
