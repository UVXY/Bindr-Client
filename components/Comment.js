import React, { Component } from 'react'
import { Image, Linking } from 'react-native';
import { Container, Content, Card, CardItem, Text, Button, Icon, Body, Right } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

export default Comment = (props) => {
    const {author, content, audio, contentLink} = props;
    console.log(author, content, audio, contentLink);
    let comment;
    if (audio) {
        comment = <Text>Audio Comments are not Working Yet</Text>
    } else {
        comment = <Text>{content}</Text>
    }
    return (
        // <Container>
        //     <CardItem header>
        //       <Text>{author}</Text>
        //     </CardItem>
        //     <CardItem bordered>
        //         <Body>
        //             {comment}
        //         </Body>
        //     </CardItem>
        // </Container>
        <Text>Test {author}</Text>
    );
}