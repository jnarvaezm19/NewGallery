import React from 'react'
import ModalAddAlbum from '../ModalAddAlbum'
import {
        Card,
        Icon,
        Button
    } from 'react-materialize'
class CardAddAlbum extends React.Component{

    render(){
        return(
                <Card>
                    <ModalAddAlbum
                        header="Add New Album"
                        id="modal-0"
                        options={{
                          dismissible: true,
                          endingTop: '10%',
                          inDuration: 250,
                          opacity: 0.5,
                          outDuration: 250,
                          preventScrolling: true,
                          startingTop: '4%'
                        }}
                        trigger={
                          <Button
                              className="red btn-addAlbum pulse"
                              floating
                              icon={<Icon>add</Icon>}
                              large
                              waves="light" 
                              node="button"></Button>
                          }
                    /> 
                </Card>
        )
    }
}
export default CardAddAlbum