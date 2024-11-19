"use client"
import React, { useState, useEffect } from 'react';
import CandyGame  from "../../../components/Games/RunnerGame";


const CandyGamePage = () => {
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAudioPermission = async () => {
      try {
        // Check if the browser supports the Web Audio API
        if (window.AudioContext || window.webkitAudioContext) {
          // Request permission to play sound
          await new AudioContext().resume();
          setPermissionGranted(true);
        } else {
          console.error('Web Audio API is not supported in this browser');
        }
      } catch (error) {
        console.error('Error requesting sound permission:', error);
      }
    };

    getAudioPermission();
  }, []);

  return (
    <>
    {true &&
      (<div className='flex justify-center'>
        <CandyGame/>
  
      </div>)
    }
    </>
  );
};

export default CandyGamePage;
