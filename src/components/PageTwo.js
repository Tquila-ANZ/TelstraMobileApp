import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Actions } from 'react-native-router-flux';
//import { Container, Button, Content, Grid, Row, Text } from 'native-base';
import { Button } from 'react-native-elements';

export default class PageTwo extends Component {
    render() {
        return (
        //    <Container>
        //         <Content justifyContent="center" alignItems="center" style={{ padding: 4, }}>
        //             <Grid style={{ alignItems: 'center' }}>
        //                 <Row>
        //                     <Button onPress={Actions.pageOne}>
        //                         <Text>
        //                             Button go to one
        //                         </Text>
        //                     </Button>
        //                 </Row>
        //             </Grid>
        //         </Content>
        //     </Container>
        <Button
        raised
        onPress={Actions.pageOne}
        icon={{name: 'home', size: 32}}
        buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
        textStyle={{textAlign: 'center'}}
        title={`Welcome to\nReact Native Elements`}
      />
        );
    }
}
