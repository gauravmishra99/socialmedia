import React, { useState } from "react";
import ProgressBar from './ProgressBar'

const Uploadform = () => {
  const [file,setFile] = useState(null);
  const [error,setError] = useState(null);
  const [caption,setCaption] = useState('');
  const [isUploading,setIsUploading] = useState(false);

  const types = ['image/png','image/jpeg'];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)){
      setFile(selected);
      setError('')
    }else{
      setFile(null);
      setError('Please select an image file (png or jpeg)')
    }
  }
  return (
    <div className="upl-form">
      <label className="upl-label">Choose an Image</label>
      <label className="upl-file">
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>
      
      <div className="output">
        {error && <div className="error">{error}</div> }
        {file && <div>{ file.name }</div>}
        {isUploading && <ProgressBar file={file} setFile={setFile} ction = {caption} setCaption={setCaption} setIsUploading={setIsUploading}/>}
      </div>
      
      <label className="upl-label">Write a Caption</label>
      <input className="upl-caption" type="text" value={caption} onChange={(e) => setCaption(e.target.value)}/>

      <button onClick={()=> setIsUploading(!isUploading)} className="btn-upload">Upload</button>
    </div>
  );
};

export default Uploadform;
