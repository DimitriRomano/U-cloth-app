import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Image,
  Button,
  Share,
  Platform,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { getFilmDetailFromApi, getImageFromApi } from "../API/TMDBApi";
//formatage de la date
import moment from "moment";
import numeral from "numeral";
//conection au store redux
import { connect } from "react-redux";
import toggleFavorite from "../Store/Reducers/favoriteReducer";
import { FloatingAction } from "react-native-floating-action";
import EnlargeShrink from "../Animations/EnlargeShrink";

class FilmDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: undefined,
      isLoading: true,
    };
  }

  _displayFloatingActionButton() {
    const { film } = this.state;
    if (film != undefined && Platform.OS === "android") {
      // Uniquement sur Android et lorsque le film est chargé
      return (
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.share_touchable_floatingactionbutton}
          onPress={() => this._shareFilm()}
        >
          <Image
            style={styles.share_image}
            source={require("../Images/ic_share.android.png")}
          />
        </TouchableOpacity>
      );
    }
  }

  //phase ou le composant est rendu complètement ( mount )
  componentDidMount() {
    console.log(this.props);
    getFilmDetailFromApi(this.props.route.params.idFilm).then((data) => {
      this.setState({
        film: data,
        isLoading: false,
      });
    });
  }

  _shareFilm() {
    const { film } = this.state;
    Share.share({ title: film.title, message: film.overview });
  }

  _toggleFavorite() {
    //def action pour le store
    const action = { type: "TOGGLE_FAVORITE", value: this.state.film };
    this.props.dispatch(action);
    this.componentDidUpdate();
  }

  //fonction pour vérifier que le fil mest bien ajouté à la liste des favoris
  componentDidUpdate() {
    //console.log("componentDidUpdate : ")
    //console.log(this.props.favoritesFilm)
  }

  _displayFavoriteImage() {
    var sourceImage = require("../Images/ic_favorite_border.png");
    var shouldEnlarge = false; // Par défaut, si le film n'est pas en favoris, on veut qu'au clic sur le bouton, celui-ci s'agrandisse => shouldEnlarge à true
    if (
      this.props.favoritesFilm.findIndex(
        (item) => item.id === this.state.film.id
      ) !== -1
    ) {
      sourceImage = require("../Images/ic_favorite.png");
      shouldEnlarge = true; // Si le film est dans les favoris, on veut qu'au clic sur le bouton, celui-ci se rétrécisse => shouldEnlarge à false
    }
    return (
      <EnlargeShrink shouldEnlarge={shouldEnlarge}>
        <Image style={styles.favorite_image} source={sourceImage} />
      </EnlargeShrink>
    );
  }

  _displayLoading() {
    if (this.state.isLoading) {
      // Si isLoading vaut true, on affiche le chargement à l'écran
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
  }

  _displayFilm() {
    const { film } = this.state;
    if (this.state.film != undefined) {
      return (
        <ScrollView style={styles.scrollview_container}>
          <Image
            style={styles.image}
            source={{ uri: getImageFromApi(film.backdrop_path) }}
          />
          <Text style={styles.title_text}>{this.state.film.title}</Text>
          <TouchableOpacity
            style={styles.favorite_container}
            onPress={() => this._toggleFavorite()}
          >
            {this._displayFavoriteImage()}
          </TouchableOpacity>
          <Text style={styles.description_text}>{film.overview}</Text>
          <Text style={styles.default_text}>
            Sortie le:{" "}
            {moment(new Date(film.release_date), "YYYY-MM-DD").format(
              "DD/MM/YYYY"
            )}
          </Text>
          <Text style={styles.default_text}>
            Note : {film.vote_average} / 10
          </Text>
          <Text style={styles.default_text}>
            Nombre de votes : {film.vote_count}
          </Text>
          <Text style={styles.default_text}>
            Budget : {numeral(film.budget).format("0,0[.]00 $")}
          </Text>
          <Text style={styles.default_text}>
            Genre(s) :{" "}
            {film.genres
              .map(function (genre) {
                return genre.name;
              })
              .join(" / ")}
          </Text>
          <Text style={styles.default_text}>
            Companie(s) :{" "}
            {film.production_companies
              .map(function (company) {
                return company.name;
              })
              .join(" / ")}
          </Text>
        </ScrollView>
      );
    }
  }

  render() {
    return (
      <View style={styles.main_container}>
        {this._displayLoading()}
        {this._displayFilm()}
        {this._displayFloatingActionButton()}
      </View>
    );
  }
}

//connecter le state de l'application dans les props du composant
const mapStateToProps = (state) => {
  return {
    favoritesFilm: state.favoritesFilm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => {
      dispatch(action);
    },
  };
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollview_container: {
    flex: 1,
  },
  image: {
    height: 169,
    margin: 5,
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 35,
    flex: 1,
    flexWrap: "wrap",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    color: "#000000",
    textAlign: "center",
  },
  description_text: {
    fontStyle: "italic",
    color: "#666666",
    margin: 5,
    marginBottom: 15,
  },
  default_text: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
  },
  favorite_container: {
    alignItems: "center",
  },
  favorite_image: {
    flex: 1,
    width: null,
    height: null,
  },
  share_touchable_floatingactionbutton: {
    position: "absolute",
    width: 60,
    height: 60,
    right: 30,
    bottom: 30,
    borderRadius: 30,
    backgroundColor: "#e91e63",
    justifyContent: "center",
    alignItems: "center",
  },
  share_image: {
    width: 30,
    height: 30,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetail);
