import React from 'react'
//import './cardStyle.css'
import {
        Card,
        CardTitle,
        Button
    } from 'react-materialize'
class CardAlbum extends React.Component{

    render(){
        return(
            <Card
                header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Card Title</CardTitle>}
            />
        )
    }
}
export default CardAlbum