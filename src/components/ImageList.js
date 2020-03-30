import React,{Component} from "react";
import InputField from "./InputField"
class ImageList extends Component{

   onSubmit = (term)=>{
       console.log(term);
       const key = "XB6Vbgf28d19tx8dR4xfF28_ZTXYvY_3uUOKmlHjre4";
        fetch('https://api.unsplash.com/search/photos?query=term', {
            method: 'GET',
            headers: {'Authorization': `Client-ID ${key}`},

        })
            .then(response => response.json())
            .then(data => console.log(data));
   };


    render(){
        return(
            <div>
              <InputField onSubmit={this.onSubmit}/>
            </div>
        )
    }
}
export default ImageList;