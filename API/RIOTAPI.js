// API/RIOTAPI.js
const API_TOKEN = "";

//get informations by name

export function getInformationsByName(name){
    const player = 'https://euw1.api.riotgames.com/lol/summoner/v3/summoners/by-name/'+name+'?api_key='+API_TOKEN
    return fetch(player)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function getMasteriesByID(ID){
    const player = 'https://euw1.api.riotgames.com/lol/summoner/v3/summoners/by-name/'+ID+'?api_key='+API_TOKEN
    return fetch(player)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function getProfilIconById(ID){
    return 'http://ddragon.leagueoflegends.com/cdn/8.14.1/img/profileicon/'+ID+".png?api_key="+API_TOKEN
}

export function isIngamebyId(ID){
    const player = 'https://euw1.api.riotgames.com/lol/spectator/v3/active-games/by-summoner/'+ID+'?api_key='+API_TOKEN
    return fetch(player)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function getRankByID(ID){
    const player = 'https://euw1.api.riotgames.com/lol/league/v3/positions/by-summoner/'+ID+'?api_key='+API_TOKEN
    return fetch(player)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}



