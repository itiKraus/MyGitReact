

function SinglePhoto({picture}){
    return(
        <div>
           
<img src={picture.thumbnailUrl}/>
    <p>{picture.title}</p>
        </div>
    )
}
export default SinglePhoto;