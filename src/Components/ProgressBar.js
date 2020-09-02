import React,{ useEffect } from 'react';
import {projectFirestore} from '../firebase'
import ImageUploadhook from '../hooks/ImageUploadhook';
import fire from '../firebase';


const ProgressBar = ({file,setFile,setIsUploading,setCaption,ction}) => {
    var user = fire.auth().currentUser;
    const {url,progress} = ImageUploadhook(file)
    
    if(user!=null){
        var email = user.email
    }
    const collectionRef = projectFirestore.collection(email)
    const docRef = collectionRef.doc(file.name)
    useEffect(()=>{
        if(url){
            setFile(null);
            setIsUploading(null);
            setCaption('');
            docRef.update({
                caption:ction
            })
        }
    },[url,setFile,setIsUploading,setCaption,ction,docRef])

    return (
        <div className="progress-bar" style={{width: progress+'%'}}>
        </div>
    )
}

export default ProgressBar
