export function loadUsers(){
    return (dispatch)=>{
        return dispatch(fecthUsers())
    }
}
export function loadAlbums(userID) {
    return (dispatch) => {
        return dispatch(fetchAlbums(userID))
    }
}
export function loadPhotos(albumID){
    return (dispatch)=>{
        return dispatch(fecthPhoto(albumID))
    }
}
function fecthUsers(){
    return{
        type:'LOAD_USERS',
        payload: fetch('https://jsonplaceholder.typicode.com/users')
        .then(result=>result.json())
    }
}
function fetchAlbums(userID) {
    return {
        type: 'LOAD_ALBUMS',
        payload: fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userID}`)
        .then(result => result.json())
    }
}
function fecthPhoto(albumID){
    return{
        type:'LOAD_PHOTOS',
        payload : fetch('https://jsonplaceholder.typicode.com/photos?albumid=${albumID}')
        .then(result=>result.json())
    }
}