import React from 'react'
import {View} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import Comment from "./Comment"

export default CommentContainer = (props) => {
    const {comments} = props;

    return (
        <View>
            {comments.map(comment => (
                <View key={comment._id}>
                    <Comment 
                        author={comment.author}
                        content={comment.content}
                        audio={comment.audio}
                        contentLink={comment.contentLink}
                    />
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                        }}
                    />
                </View>
            ))}
        </View>
    );
}