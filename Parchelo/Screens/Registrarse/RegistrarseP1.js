import { View, Text, TextInput, KeyboardAvoidingView, Platform, StyleSheet, Pressable } from "react-native"
import Back from '@expo/vector-icons/Ionicons';

export default function RegistrarseP1({navigation}){
    return(
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
            <View>
                <View style = {styles.header}>
                    <Pressable 
                    style={{alignSelf: 'flex-start', paddingStart: 20}}
                    onPress={() => navigation.goBack()}>
                        <Back name="arrow-back" size={30} color="white" />
                    </Pressable>
                    
                    <Text style={styles.titulo}>¡Bienvenid@s!</Text>
                    <Text style={styles.descripcion}>Estamos emocionados de que te unas. Aquí, cada persona cuenta.</Text>
                </View>

            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    contenedor:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    header:{
        paddingTop: 70,
        alignItems: 'center',
        backgroundColor: '#4A90E2',
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30
    },
    titulo: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    },
    descripcion: {
        color: 'white',
        textAlign:'center',
        fontSize: 18,
        paddingTop: 20,
        paddingStart: 20,
        paddingEnd: 20, 
        paddingBottom: 40
    }
})