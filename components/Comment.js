import React from 'react'
import { Text, View } from 'native-base';
import SoundPlayer from "./SoundPlayer";

export default Comment = (props) => {
    const {author, content, audio, contentLink} = props;
    console.log(props);

    return (
        <View> 
            <Text>{`${author} posted:\n`}</Text>
            {audio ? <SoundPlayer uri={contentLink}/> : <Text>{content}</Text> }
        </View>
    )
};