import { StyleSheet, Text, ScrollView, View, Pressable, ImageBackground, Dimensions } from 'react-native'
import { Link } from 'react-router-native';
import Courosel from './carousel'


var { height } = Dimensions.get('window')

export default function Home() {


    return (
        <ScrollView style={styles.home}>
            <ImageBackground source={require('../../../assets/index.jpg')} resizeMode="cover" style={styles.backGroundhome}>
                <View style={styles.backGroundhome}>
                    <Text style={styles.title}>TECNOCEL</Text>
                    <Text style={styles.subtitle}>Las mejores marcas estan en TECNOCEL</Text>
                    <Text style={styles.subtitle}>Eleje tu notebook ideal para trabajar o jugar!</Text>
                    <Link to="/products" style={styles.linkHero} >
                        <Text style={[styles.linkText, styles.subtitle]}>Ver Productos</Text>
                    </Link>
                </View>

            </ImageBackground>
            <View style={styles.carousel}>
                <Courosel />
            </View>
        </ScrollView>
    );
}

//styles
const styles = StyleSheet.create({
    home: {
        display: 'flex',
        flexDirection: 'column',
        width: "100%",
        backgroundColor: 'rgba(130, 77, 52, 0.4)'
    },
    backGroundhome: {
        width: '100%',
        height: 850,
        margin: 0,
        padding: 0,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(130, 77, 52, 0.2)'
    },
    title: {
        fontSize: 70,
        elevation: 100,
        textShadowColor: 'lightgreen',
        textShadowOffset: { width: 1, height: 3 },
        textShadowRadius: 5,
        color: 'black',
        padding: 10,
        marginTop: 50,
    },
    subtitle: {
        textAlign: 'center',
        color: 'white'


    },
    linkHero: {
        marginTop: 15,
        padding: 7,
        fontWeight: '600',
        textAlign: 'center',
        backgroundColor: 'lightgreen',
        borderRadius: 20
    },
    linkText: {
        color: 'lightgreen',
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 10,
        
       
    },
    carousel: {
        minHeight: 800,
    }
})