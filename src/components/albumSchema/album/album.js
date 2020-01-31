import React from 'react'
import CardAddAlbum from '../CardAddAlbum'
import CardAlbum from '../CardAlbum'
import '../CardAddAlbum/cardStyle.css'

const Album = () =>{
    return(
        <div className="row">
            <div className="col s6">
                <div className="card-album-add">
                    <CardAddAlbum/>
                </div>
            </div>
            <div className="col s6">
                <div className="card-album">
                    <CardAlbum/>
                </div>   
            </div>
        </div>
    )
}
export default Album