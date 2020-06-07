import React, { useState } from 'react';
import Camera, { FACING_MODES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import { Redirect } from 'react-router-dom'



function TakePic (props) {

  const [dataUri, setDataUri] = useState('');
 
  function handleTakePhotoAnimationDone (dataUri) {
    // Do stuff with the photo...
    console.log(dataUri);
    setDataUri(dataUri);
  }
 
  function handleCameraError (error) {
    console.log('handleCameraError', error);
  }
 
  if (dataUri !== '') {
    console.log('before redirect: '+ dataUri)
    return (
      <Redirect
        to={{
          pathname: "/reg/rider",
          state: { dataUri: dataUri }
        }}
      />
    )
  }

  return (
    <div className='takePic'>
      <h1>Camera Page</h1>
      <Camera
        onTakePhotoAnimationDone = { (dataUri) => { handleTakePhotoAnimationDone(dataUri); } }
        onCameraError = { (error) => { handleCameraError(error); } }
        idealFacingMode = {FACING_MODES.USER}
        idealResolution = {{width: 144, height: 144}}
        sizeFactor = {1}
      />
    </div>
  );

}

export default TakePic;