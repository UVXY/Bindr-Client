import React from 'react'
import {Container, Text, Body} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default Comment = (props) => {
    const {author, content, audio, contentLink} = props;
    let comment;
    if (audio) {
        comment = "Audio Comments are not Working Yet"
    } else {
        comment = content
    }
    return (
        <Text>{`${author} says:\n ${comment}`}</Text>
    );
}