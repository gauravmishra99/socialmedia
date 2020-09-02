import {useState, useEffect} from 'react';
import {projectStorage, projectFirestore,timestamp} from '../firebase'
import fire from '../firebase'


const ImageUploadhook = (file) => {
    var user = fire.auth().currentUser;
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    if(user!=null){
        var email = user.email
    }
    useEffect(()=>{
        //references
        const storageRef = projectStorage.ref(file.name)
        const collectionRef = projectFirestore.collection(email)

        storageRef.put(file).on('state_changed',(snap)=>{
            let percentage = (snap.bytesTransferred/snap.totalBytes)*100
            setProgress(percentage)
        },(err)=>{
            setError(err);
        }, async()=>{
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            //const caption = ction
            //collectionRef.add({url,createdAt})
            collectionRef.doc(file.name).set({
                url: url,
                createdAt: createdAt
            })
            setUrl(url)
        })

    },[file,email])
    
    return {progress,url,error}
}

export default ImageUploadhook;