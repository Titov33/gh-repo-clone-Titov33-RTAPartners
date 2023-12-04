import React from 'react';
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

export function GragientTextBlue(props) {
    return (
        <MaskedView maskElement={<Text style={[props.style, {backgroundColor:'transparent'}]}>{props.text}</Text>}>
            <LinearGradient
                start={{x: 0.1, y: 0}}
                end={{x: 1, y: 1}}
                colors={['#1883E7', '#FF174F']}
                locations={[0.1, 0.5, 0.8]}
            >
                <Text style={[props.style, {opacity: 0}]}>{props.text}</Text>
            </LinearGradient>
        </MaskedView>
    );
}