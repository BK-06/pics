import ImageShow from "./ImageShow"
import './ImageList.css'

export default function ImageList({images}){

    const renderedImages = images.map((el,index)=>{
        return <ImageShow key={el.id} image = {el}/>
    })
    return (
        <div className="image-list">
            {renderedImages} 
        </div>
    )
}