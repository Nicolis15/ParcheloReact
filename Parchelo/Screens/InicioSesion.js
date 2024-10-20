import { View, Image, Text, TextInput, Pressable, KeyboardAvoidingView, ScrollView, Platform, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from "react";
import GmailIcon from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import Facebook from '@expo/vector-icons/Entypo';


export default function InicioSesion({navigation}){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [verPassword, setVerPassword] = useState(true)
    return(
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.contenedor} >
            <ScrollView keyboardDismissMode= 'on-drag'>
                <View style={styles.contenedorPrincipal}>
                    <View style= {{ alignItems: 'center', marginBottom: 50, marginTop: 80}}>
                        <Image
                        source={require('../res/logo.png')}
                        style={styles.logo}
                        />
                    </View>

                    <View style={styles.contenedorInput1}> 
                        <View style={styles.icono}>
                            <Icon name="user-circle" size={24} color="white" />
                        </View>
                        <View style={styles.contenedorInputText}>
                            <TextInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder={"Email"}
                            style={styles.inputText}
                        />
                        </View>
                    </View>
                    <View style={styles.contenedorInput2}>
                        <View style={styles.icono}>
                            <Icon name="lock" size={25} color="white" />
                        </View>

                        <View style={styles.contenedorInputText}>
                            <TextInput
                            value={password}
                            onChangeText={setPassword}
                            placeholder={"Password"}
                            secureTextEntry={verPassword}
                            style={styles.inputText}
                            />
                            <Pressable onPress={() => setVerPassword(!verPassword)} style={{padding: 10}}>
                                {verPassword ? <Feather name="eye-off" size={24} color="black"  /> : <Feather name="eye" size={24} color="black"  /> }
                            </Pressable>
                        </View>
                        
                    </View>
                    <Pressable style={{paddingTop: 10, paddingBottom: 90}}>
                        <Text> ¿Haz olvidado tu contraseña?</Text>
                    </Pressable>

                    <Pressable style={styles.boton}>
                        <Text style={{textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 16, padding: 10}}> Iniciar sesión</Text>
                    </Pressable>
                    <View style={styles.autenticacion}>
                        <Pressable style={{paddingEnd: 60}}>
                            <GmailIcon name="gmail" size={45} color="black" />
                        </Pressable>

                        <Pressable>
                            <Facebook name="facebook" size={40} color="black" />
                        </Pressable>
                    </View>
                    <View style={styles.olvidado}>
                        <Text>¿No tienes una cuenta?</Text>
                        <Pressable onPress={() => navigation.navigate('RegistrarseP1')}>
                            <Text style={{color: '#0076CB', textDecorationLine: 'underline', paddingStart: 5}}>Registrate</Text>
                        </Pressable>
                    </View>


                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    contenedor:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contenedorPrincipal:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo:{
        maxWidth: 150,
        maxHeight: 150
    },

    contenedorInput1:{
        flex: 1,
        backgroundColor: '#4A90E2',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        margin: 20,
        width: 300,
        maxHeight: 50
    },

    contenedorInput2:{
        flex: 1,
        backgroundColor: '#4A90E2',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        marginTop: 20,
        width: 300,
        maxHeight: 50
    },
    icono:{
        alignItems: 'center',
        minWidth: 45,
        paddingStart: 10,
        paddingEnd: 10
    },
    contenedorInputText: {
        flex: 1,
        flexDirection: 'row',
        minHeight: 49,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    inputText:{
        flex: 1,
        marginStart: 5,
        fontSize: 16,
    },
    boton:{
        minWidth: 300,
        borderRadius: 10,
        backgroundColor: '#4A90E2',
        alignItems: 'center'
    },
    autenticacion:{
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 30
    },
    olvidado:{
        alignItems: 'center',
        flexDirection: 'row',
    }

})