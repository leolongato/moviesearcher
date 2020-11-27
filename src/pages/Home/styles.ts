import styled from 'styled-components/native';
import {Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get('window').width);

const cardWidth = Math.round((screenWidth / 3) - 10);
const cardHeight = Math.round(cardWidth * 1.5);

export const Container = styled.View`
    flex: 1;
    align-items: center;
    margin: 0 10px;
`;

export const MovieBanner = styled.Image`
    width: ${cardWidth}px;
    height: ${cardHeight}px;
    margin-right: 5px;
    border-radius: 3px;
`;

