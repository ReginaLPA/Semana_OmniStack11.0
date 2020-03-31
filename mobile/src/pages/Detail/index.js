import React from 'react';
import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail() {
    const navigation = useNavigation();
    const message = 'Olá APAD, estou entrando em contato para ajudar no caso "Cadelinha atropelada" com o valor de R$120,00.';


    function navigationBack(){
        navigation.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: 'Herói do caso: Cadelinh Atropelada',
            recipients: ['lacerdapinheiro.com.br'],
            body:
        })
    }

    function sendWhatsapp(){

    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity
                    onPress={() => { navigationBack}}>
                    <Feather name='arrow-left' size={20} color='#E03041' />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty,{marginTop:0}]}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>Cadelelinha atropelada</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>
            </View>
            <View style={styles.conatactBox}>
                <Text style={styles.heroTitle}>Salve o dia</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.actions} onPress={() => { }}>
                        <Text style={styles.actionsText}>Whatsapp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actions} onPress={() => { }}>
                        <Text style={styles.actionsText}>E-mail></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}