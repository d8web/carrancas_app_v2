import React from "react";
import styled from 'styled-components/native'

import { MaterialCommunityIcons, Ionicons, Feather } from '@expo/vector-icons'; 

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: rgba(255,255,255,0.6);
    border-radius: 30px;
    flex-direction: row;
    padding-left: 16px;
    align-items: center;
    margin-bottom: 16px;
`

const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #555;
    margin-left: 10px;
`

export default ({ iconSvg, type, placeholder, value, onChangeText, password }) => {
    return (
        <InputArea>

            {type === 'name' &&
                <>
                    <Feather name={iconSvg} size={24} color="#555" />
                    <Input
                        placeholder={placeholder}
                        value={value}
                        onChangeText={onChangeText}
                        placeholderTextColor="#555"
                    />
                </>
            }

            {type === 'email' &&
                <>
                    <MaterialCommunityIcons name={iconSvg} size={24} color="#555" />
                    <Input
                        placeholder={placeholder}
                        value={value}
                        onChangeText={onChangeText}
                        placeholderTextColor="#555"
                    />
                </>
            }

            {type === 'password' &&
                <>
                    <Ionicons name={iconSvg} size={24} color="#555" />
                    <Input
                        placeholder={placeholder}
                        value={value}
                        onChangeText={onChangeText}
                        secureTextEntry={password}
                        placeholderTextColor="#555"
                    />
                </>
            }
            
        </InputArea>
    )
}