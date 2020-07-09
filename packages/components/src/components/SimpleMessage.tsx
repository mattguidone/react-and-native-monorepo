import React from 'react';
import { Text, Platform } from 'react-native';

//type AppProps = { message: string }; /* could use interface */

interface AppProps {
    message: string;
}

const SimpleMessage = ( { message }: AppProps ) => 
    {
     return( <Text>{message} | ({[Platform.OS]})</Text> ) 
    }

export default SimpleMessage;