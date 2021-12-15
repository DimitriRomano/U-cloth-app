import React from "react";
import {StyleSheet, View, Button, TextInput, Text, FlatList, ActivityIndicator} from 'react-native';
import { getFilmsFromApiWithSearchedText } from "../API/TMDBApi";
import FilmList from "./FilmList";

class Search extends React.Component {

    constructor(props){
        super(props)
        this.searchedText = ""
        this.page = 0,
        this.totalPages = 0,
        this.state = { 
            films: [],
            isLoading: false
        }

        //eviter le data binding et toujours utiliser le contexte de search
        this._loadFilms = this._loadFilms.bind(this);
    }

    //chargement via api TMDB
    _loadFilms(){
        this.setState({ isLoading: true })
        if (this.searchedText.length > 0){
            getFilmsFromApiWithSearchedText(this.searchedText, this.page+1 ).then(data => {
                this.page = data.page
                this.totalPages = data.total_pages
                this.setState({ 
                    films: [ ...this.state.films, ...data.results ],
                    isLoading: false
                })
            })

        }
        
        
    }

    //fonction qui affiche boucle chargment quand les films chargent
    _displayLoading() {
        return (
            <View style={styles.loading_container}>
                <ActivityIndicator size='large' />
            </View>
        )
    }

    _searchTextInputChanged(text){
        this.searchedText = text;
    }

    //fonction qui effectue une nouvelle recherche ( gestion du scroll infini)
    _searchFilms(){
        this.page = 0
        this.totalPages = 0
        this.setState({
            films: []
        },()=>{

            this._loadFilms()

        })
    }

    _displayDetailForFilm = (idFilm) => {
        console.log("Display film with id " + idFilm)
        this.props.navigation.navigate("Detail",{idFilm: idFilm})
    }

    render(){
        return (
            <View style={styles.main_container}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Titre du film"
                    onChangeText={(text)=>this._searchTextInputChanged(text)}
                    onSubmitEditing={() => this._searchFilms()}    
                />
                <Button title="Rechercher" style={{ height:50 }} onPress={()=>{ this._searchFilms()}}/>
                <FilmList
                    films={this.state.films} // C'est bien le component Search qui récupère les films depuis l'API et on les transmet ici pour que le component FilmList les affiche
                    navigation={this.props.navigation} // Ici on transmet les informations de navigation pour permettre au component FilmList de naviguer vers le détail d'un film
                    loadFilms={this._loadFilms} // _loadFilm charge les films suivants, ça concerne l'API, le component FilmList va juste appeler cette méthode quand l'utilisateur aura parcouru tous les films et c'est le component Search qui lui fournira les films suivants
                    page={this.page}
                    totalPages={this.totalPages} // les infos page et totalPages vont être utile, côté component FilmList, pour ne pas déclencher l'évènement pour charger plus de film si on a atteint la dernière page
                    favoriteList={false} // Ici j'ai simplement ajouté un booléen à false pour indiquer qu'on n'est pas dans le cas de l'affichage de la liste des films favoris. Et ainsi pouvoir déclencher le chargement de plus de films lorsque l'utilisateur scrolle.
                />
                {this._displayLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container:{
        flex: 1,
    },

    textInput: {
        marginLeft:5, 
        marginRight:5, 
        height:50, 
        borderColor: '#000000', 
        borderWidth: 1,
        paddingLeft: 5
    },

    loading_container:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default Search