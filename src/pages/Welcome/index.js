import React from 'react';
import {
    View
    , Text
    , StyleSheet
    , Image,
    TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable';

export default function Welcome() {
    return (
        <View style={styles.container}>
            <View style={styles.contanierLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/logo.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />
            </View>
            <Animatable.View style={styles.containerForm}  animation="fadeInUp">
                <Text style={styles.title}>
                    Monitore e organize seus gastos de qualer lugar!
                </Text>
                <Text style={styles.text}>
                    Faça os eu login para comerçar
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#38A69D"

    },
    contanierLogo: {
        flex: 2,
        justifyContent: 'center',
        alignContent: 'center'
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12
    },
    text: {
        color: '#a1a1a1'
    },
    button: {
        position: 'absolute',
        borderRadius: 50,
        backgroundColor: '#38a69d',
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }

})