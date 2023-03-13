
import React, { Component } from 'react'

export class News extends Component {
  
  render() {
    let {title,description,imageUrl,newsUrl,publishedAt,author,source} = this.props;
    return (
      <>
      <div className='my-3'>
        <div className="card">
  <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'80%',zIndex:'1'}}>
    {source}
  </span>

   
   <img src={!imageUrl ? "https://picsum.photos/200/300?random=1" :  imageUrl} className="card-img-top" alt="..."/>
   <div className="card-body">
     <h5 className="card-title">{title}
 
 
  </h5>
     <p className="card-text">{description}...</p>
     <p class="card-text"><small class="text-muted">By {!author?"unknown":author} {new Date(publishedAt).toGMTString()}</small></p>
     <a rel="noreferrer" href={newsUrl} target="_blank"className="btn btn-sm btn-primary">Read More</a>
   </div>
 </div>
 </div>

 
  <div>
   
      </div>
   
      </>
    )
  }
}

export default News
