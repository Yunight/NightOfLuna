// Components/summoner.js

import React, { Component } from 'react'
import {Image, StyleSheet, Text, View} from "react-native";
import {getInformationsByName, getProfilIconById, getRankByID, isIngamebyId} from '../API/RIOTAPI'



class Summoner extends Component{
    constructor(props) {
        super(props)
        this.state = {
            playerDetailedLoad: false,
            playerIsIngame : '',
            currentRank:[],
        }
    }

    componentDidMount(){
        const ID = '20625868'
        if(!this.state.playerDetailedLoad){
            isIngamebyId(ID).then(data => {
                this.setState({
                    playerIsIngame: data,
                })
            })
            getRankByID(ID).then(data => {
                this.setState({
                    currentRank: data,
                    playerDetailedLoad : true,
                })
            })
        }

    }

    isInGame () {
        if(!this.state.playerIsIngame.status){
            return (
                    <Text style={styles.isIngame}>En jeu</Text>
            )
        } else {
            return (
                <Text style={styles.isIngame}>Pas en jeu</Text>
            )
        }
    }

    render(){
        const {playerData} = this.props

        console.log("----------------")
        console.log(this.state)
        return (
            <View style={styles.main_container}>
                <Image
                    style={styles.image}
                    source={{uri: getProfilIconById(this.props.playerData.profileIconId)}}
                />
                <View style={styles.content_container}>
                    <Text style={styles.playerName}>{this.props.playerData.name}</Text>
                    <Text style={styles.level}>Niveau : {this.props.playerData.summonerLevel}</Text>
                    { this.isInGame ()}
                </View>
                <View style={styles.rank}>
                    <Text style={styles.playerName}>{this.props.playerData.name}</Text>

                </View>

            </View>
        )
    }
}

export default Summoner

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        flexDirection:"column",
        backgroundColor:'green'
    },
    content_container:{
        flexDirection:'row',
        padding:10,
        flex: 1,
        height:50,
        backgroundColor:'pink',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex:3
    },
    title:{
        flex: 8,
        textAlign:'center',
        fontSize:30,
        margin:10,
    },
    playerName:{
        flex:2,
        fontWeight: 'bold',
        fontSize: 25,
        backgroundColor:'blue',
        textAlign:'center',
    },
    level:{
        flex:1,
        backgroundColor:'yellow',
        textAlign:'center',
    },
    isIngame:{
        flex:1,
        fontSize:15,
        textAlign:'center',
    },
    rank : {
        backgroundColor:'red',
        flex: 9,
    }

})