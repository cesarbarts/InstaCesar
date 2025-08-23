/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { Component } from 'react';
import { StatusBar, StyleSheet, useColorScheme, View, Text, SafeAreaView, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native';



class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            stories: [
                { id: 1,foto: require("./src/fotos/imagemPerfil.jpg"), nome: "Seu story" },
                { id: 2,foto: require("./src/fotos/imagemPerfil.jpg"), nome: "pessoa2" },
                { id: 3,foto: require("./src/fotos/imagemPerfil.jpg"), nome: "pessoa3" },
            ],
            postagens: [
                { foto: require("./src/fotos/imagemPerfil.jpg"), nome: "cesaraugusto", fotoPerfil: require("./src/fotos/imagemPerfil.jpg"), like: true, totalLikes: 1, descricaoPost: "loremipsum1" },
                { foto: require("./src/fotos/imagemPerfil.jpg"), nome: "cesaraugusto", fotoPerfil: require("./src/fotos/imagemPerfil.jpg"), like: false, totalLikes: 0, descricaoPost: "loremipsum2" },
                { foto: require("./src/fotos/imagemPerfil.jpg"), nome: "cesaraugusto", fotoPerfil: require("./src/fotos/imagemPerfil.jpg"), like: false, totalLikes: 0, descricaoPost: "loremipsum3" },
                { foto: require("./src/fotos/imagemPerfil.jpg"), nome: "cesaraugusto", fotoPerfil: require("./src/fotos/imagemPerfil.jpg"), like: false, totalLikes: 0, descricaoPost: "loremipsum4" },
            ],
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.viewgeral}>
                <ScrollView style={styles.scrollGeral}>
                    <View style={styles.header}>
                        <Image source={require("./src/logoInsta.png")} style={styles.logotipo}></Image>
                        <View style={styles.notif}>
                            <Image source={require("./src/CoracaoNao.png")} style={styles.interacao}></Image>
                            <Image source={require("./src/InstaDm.png")} style={styles.interacao}></Image>
                        </View>
                    </View>
                    <View style={styles.stories}>
                        <FlatList style={styles.estiloflat} horizontal={true} data={this.state.stories} renderItem={({ item }) => <Storie data={item}></Storie>}></FlatList>
                    </View>
                    <FlatList data={this.state.postagens} renderItem={({ item }) => <Postagem data={item}></Postagem>}></FlatList>
                </ScrollView>

                <View style={styles.rodape}>
                    <View style={styles.itemRodape}>
                        <Image style={styles.itemRodapeImg} source={require("./src/InstaHome.png")}></Image>
                    </View>
                    <View style={styles.itemRodape}>
                        <Image style={styles.itemRodapeImg} source={require("./src/InstaSearch.png")}></Image>
                    </View>
                    <View style={styles.itemRodape}>
                        <Image style={styles.itemRodapeImg} source={require("./src/StorieAdd.png")}></Image>
                    </View>
                    <View style={styles.itemRodape}>
                        <Image style={styles.itemRodapeImg} source={require("./src/InstaReels.png")}></Image>
                    </View>
                    <View style={styles.itemRodape}>
                        <Image style={[styles.itemRodapeImg, styles.perfilRodape]} source={require("./src/fotos/imagemPerfil.jpg")}></Image>
                    </View>


                </View>
            </SafeAreaView>
        )
    }
}



const styles = StyleSheet.create({
    header: {
        height: 50,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingLeft: 10
    },
    notif: {
        flexDirection: "row"
    },
    notifItem: {
        height: 25,
        width: 25
    },
    stories: {
        height: 120,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    estiloflat: {
    },
    storie: {
        alignItems: "center",
        margin: 10,
        height: 80,
        width: 80,
    },
    fotoStorie: {
        marginBottom: 10,
        backgroundColor: "gray",
        alignItems: "center",
        justifyContent: "center",
        width: 80,
        height: 80,
        borderRadius: 1000,
        position: "relative"
    },
    iconeAdicionar: {
        position: "absolute",
        width: 30,
        height: 30,
        backgroundColor: "lightgray",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        borderWidth: 2,
        borderColor: "white",
        right: -5,
        bottom: -5
    },
    fotoDoStorie: {
        resizeMode: "cover",
        height: "92.5%",
        width: "92.5%",
        borderRadius: 100,
        borderColor: "white",
        borderStyle: "solid",
        borderWidth: 2
    },
    posts: {
    },
    postagem: {
        height: 500
    },
    postHeader: {
        flexDirection: "row",
        alignItems: "center"
    },
    fotoPerfil: {
        margin: 10,
        width: 30,
        height: 30,
        borderRadius: 100
    },
    fotoDoPerfil: {
        resizeMode: "cover",
        width: "100%",
        height: "100%",
        borderRadius: 100
    },
    postBody: {

        flex: 1
    },
    postInteract: {
        flexDirection: "row",
        margin: 10
    },
    interacao: {
        width: 30,
        height: 30,
        marginRight: 10

    },

    postagens: {
        flex: 1
    },
    rodape: {
        height: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20
    },
    viewgeral: {
        flex: 1
    },
    scrollGeral: {
        flexBasis: 2
    },

    logotipo: {
        width: 110,
        height: 30
    },

    nomePerfil: {
        fontWeight: "bold"
    },

    itemRodapeImg: {
        width: 30,
        height: 30
    },

    todasInteracoes: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    nomeDescricao: {
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    descricaoPost: {
        marginLeft: 5
    },
    perfilRodape: {
        borderRadius: 100
    }

});

export default App;

class Storie extends Component {
    render() {
        return (
            <View style={styles.storie}>
                <View style={styles.fotoStorie}>
                    <Image style={styles.fotoDoStorie}source={this.props.data.foto}></Image>
                    
                </View>
                {this.props.data.id < 2 && (<View style={styles.iconeAdicionar}><Text style={{fontSize: 20}}>+</Text></View>)}
                <Text>{this.props.data.nome}</Text>
            </View>
        )
    }
}


class Postagem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: this.props.data
        };

        this.curtir = this.curtir.bind(this)
    }

    curtir() {
        let feed = this.state.feed;

        if (!feed.like) {
            this.setState({
                feed: {
                    ...feed,
                    like: true,
                    totalLikes: this.state.feed.totalLikes + 1
                }
            })
        } else {
            this.setState({
                feed: {
                    ...feed,
                    like: false,
                    totalLikes: this.state.feed.totalLikes - 1
                }
            })
        }


        return 1;
    }

    render() {
        return (
            <View style={styles.postagem}>
                <View style={styles.postHeader}>
                    <View style={styles.fotoPerfil}><Image style={styles.fotoDoPerfil} source={this.props.data.fotoPerfil}></Image></View>
                    <Text style={styles.nomePerfil}>{this.props.data.nome}</Text>
                </View>
                <View style={styles.postBody}>
                    <Image style={{ resizeMode: "cover", height: "100%", width: "100%" }} source={this.props.data.foto}></Image>
                </View>
                <View style={styles.todasInteracoes}>
                    <View style={styles.postInteract}>
                        <TouchableOpacity onPress={this.curtir}>
                            <Image source={this.state.feed.like ? require("./src/CoracaoSim.png") : require("./src/CoracaoNao.png")} style={styles.interacao}></Image>
                        </TouchableOpacity>
                        <Image source={require("./src/InstaComment.png")} style={styles.interacao}></Image>
                        <Image source={require("./src/InstaShare.png")} style={styles.interacao}></Image>
                    </View>
                    <Image source={require("./src/InstaSave.png")} style={styles.interacao}></Image>
                </View>
                {this.state.feed.totalLikes > 0 && (
                    <View style={styles.nomeDescricao}>
                        <Text>{this.state.feed.totalLikes > 1 ? (this.state.feed.totalLikes > 0 ? this.state.feed.totalLikes + " curtidas" : "") : this.state.feed.totalLikes + " curtida"}</Text>
                    </View>)}
                <View style={styles.nomeDescricao}>
                    <Text style={styles.nomePerfil}>{this.props.data.nome}</Text>
                    <Text style={styles.descricaoPost}>{this.props.data.descricaoPost}</Text>
                </View>
            </View>
        )
    }
}