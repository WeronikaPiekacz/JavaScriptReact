import React, {Component} from 'react'
import PhotoContainer from './PhotoContainer'
import '../App.css'

class Gallery extends Component {
    constructor() { 
        super();
        this.state = {
            photos: []
        };
    }
    
    componentDidMount() {
        fetch('https://api.thedogapi.com/v1/images/search')
            .then (response => {
                if(!response.ok){throw Error("Error fetching dog")}
                return response.json()

                .then(allData => {
                    this.setState({photos: allData});
                })

                .catch(er=>{
                    throw Error(er.message);
                })
            }
        );      
    }

    render () {
        return (
            <div className='Home'>
                <div className='Gallery'>
                    <PhotoContainer photos={this.state.photos}/> 
                    {this.state.photos.name}
                </div>

            </div>
        );
    }   

}


// function Gallery() {
//     return (
//         <div className="Home">
//             Gallery
//         </div>
//     )
// }

export default Gallery
