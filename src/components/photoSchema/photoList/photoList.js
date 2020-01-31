import React from 'react'

class PhotoList extends React.Component{
    state = {
        imgs : [
            'https://picsum.photos/200/300?image=0',
            'https://picsum.photos/200/300?image=1',
            'https://picsum.photos/200/300?image=2',
            'https://picsum.photos/200/300?image=3',
            'https://picsum.photos/200/300?image=4'
        ]
    }
    render(){
        return(
            this.state.imgs.map((img) => (
                <img src={img}/>
            ))
        )
    }
} 
export default PhotoList