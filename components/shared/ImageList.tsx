"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Input } from "../ui/input";



function ImageList(props:any) {
 
    const [selectedImage, setSelectedImage] = useState('');
    const [prediction, setPrediction] = useState('');

  return (
    <>
    <h1>Image Classification</h1>

<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
  {props.images.map((image:any, index:any) => (
    <div key={index} onClick={() => props.handleImageClick(image)} style={{ cursor: 'pointer' }}>
      <img src={image} alt={`Image ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
    </div>
  ))}
</div>

{selectedImage && (
  <div style={{ marginTop: '20px' }}>
    <h2>Selected Image: {selectedImage}</h2>
    {prediction ? <p>Prediction: {prediction}</p> : <p>Loading prediction...</p>}
  </div>
)}
    
    </>
  );
}

export default ImageList;
