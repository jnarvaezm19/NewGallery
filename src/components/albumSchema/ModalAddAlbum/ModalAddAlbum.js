import React from 'react'
import {Modal, Button} from 'react-materialize'
class ModalAddAlbum extends React.Component{
    
    state = {
        AlbumName: ''
    }

    handleChange = (e) =>{
        this.setState({
            AlbumName: e.target.value
        })
    }

    onSubmit = (e) => {
        
        console.log(this.state.AlbumName)
    }

    render(){
        return(
            <Modal
                {...this.props}
            >
                <form onSubmit={this.onSubmit} className="">
                    <div className="form-group">
                        <div className="form-group">
                            <input 
                                type="text"
                                placeholder="Album Name"
                                className="form-control"
                                name="AlbumName"
                                onChange={this.handleChange}
                            />
                            <button
                                type="submit"
                                className="btn blue form-control right"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </form>
            </Modal>
        )
    }
}
export default ModalAddAlbum