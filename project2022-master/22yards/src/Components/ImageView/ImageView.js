import React from "react";

function ImageView(props){
   return (
      <div className="Image-View-modal d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex justify-content-end" style={{width:"100%",paddingRight:"10px"}}>
            <img onClick={()=>{props.CloseThisImage()}}
                 className="ImageView-close"
                 alt={"22Yards"}
                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABcklEQVRIie2WsU7DMBCGf+ecqfWYqH0DhvIMiJYOgHhZJEBCLRLPQIe+QaN0tDrFdhiIoG0c59KCkKr+o+27z/b57gycdeoSvsFM61Ra9wwAhqK7gVJ5F6db9qWh6N5nXwOvtE5ia+eAuKyGlmUsx0mvt+JAufbRvmFs3cuWEQBciKJ4zbRO26CZ1mls7Vvd3jzur62B/RIjae08BP+6XjsHxIjjsQYuKLoFyg8/3L2vN5vh/sxK60RaO2uALp2kh5o33248cdpxtB2ztrVO0nXa72csMBdunDOHQINgoC1u5aJy4Z0zRJNQGgbBQOvJfQqelA3uCGdB2WAmnA0F2HnMkxCCfZBfv2puef2Tx8WB/1s6Nca4vQzKaUE07lpev1c0QbkVqUt5DYIPqb2HwDn9uFK5MBRd+fJ0qNTaEN38xH1Hx/Tj9scyUCo3RJMGeE2cfrx0Uk45/66BUrnnwfH7cfVZewKAps9aSMfan3Ua+gQT5CIGrhkIQwAAAABJRU5ErkJggg=="/>
          </div>
          <img src={props.src} alt={"22Yards"} style={{maxHeight:"100%",maxWidth:"100%"}}/>
      </div>
   )
}

export default ImageView