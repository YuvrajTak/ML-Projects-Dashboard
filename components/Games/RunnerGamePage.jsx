import React, { useState, useEffect } from 'react';
import  RunnerGame  from "./RunnerGame";

const RunnerGamePage = () => {

  const [permissionGranted, setPermissionGranted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAudioPermission = async () => {
      // try {
      //   const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      //   if (stream) {
      //     // Permission granted
      //     setPermissionGranted(true);
      //   //  stream.getTracks().forEach(track => track.stop()); // Stop the stream immediately after permission is granted
      //   } else {
      //     // Permission denied
      //     console.error('Permission denied for audio');
      //   }
      // } catch (error) {
      //   console.error('Error requesting sound permission:', error);
      // }
      // try {
      //   // Check if the browser supports the Web Audio API
      //   if (window.AudioContext || window.webkitAudioContext) {
      //     // Request permission to play sound
      //     await new AudioContext().resume();
      //     setPermissionGranted(true);
      //   } else {
      //     console.error('Web Audio API is not supported in this browser');
      //   }
      // } catch (error) {
      //   console.error('Error requesting sound permission:', error);
      // }
    };

    getAudioPermission();
  }, []);

  return (
    <>
    {true &&
      (<div className='flex justify-center mt-24'>
       <RunnerGame/>
  
      </div>)
    }
    {/* {!permissionGranted &&
      (<div className='flex justify-center mt-24'>
      <h1 className='bg-red-500'>Please allow sound Permission of the Browser</h1>
  
      </div>)
    } */}

    </>
  );
};

export default RunnerGamePage;
