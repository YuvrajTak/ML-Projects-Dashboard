import { Unity, useUnityContext, UnityProvider } from "react-unity-webgl";
import React, { lazy, Suspense } from 'react';
import ProgressBar from './ProgressBar'

const CandyGame = () => {

  function handleClickEnterFullscreen() {
    requestFullscreen(true);
  }
  const { loadingProgression, isLoaded, requestFullscreen, unityProvider } = useUnityContext({
    loaderUrl: "/candy-cream/candy-crush.loader.js",
    dataUrl: "/candy-cream/webgl.data",
    frameworkUrl: "/candy-cream/build.framework.js",
    codeUrl: "/candy-cream/build.wasm",
  });
 console.log("isLoaded---",isLoaded)
  return (
    <>
      <div>
        {!isLoaded && (
        <div>
        <ProgressBar progress={Math.round(loadingProgression * 100)}/>
         <h1> Thoda Sa Ruk Loading... {Math.round(loadingProgression * 100)}%</h1>
        </div>
        )}
        <Suspense fallback={<div></div>}>
          <Unity unityProvider={unityProvider} style={{ width: "400px", height: "600px" }}/>
        </Suspense>
        <button className="flex justify-center mt-2 mb-2 btn bg-indigo-500 text-white font-bold py-2 px-4 mr-4 rounded-full hover:bg-indigo-700 shadow-sm"
         onClick={handleClickEnterFullscreen}>
          <svg className="w-6 h-6 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 0 1 .174 2.495M17 16a4 4 0 0 1 2.495 .174M17 8a4 4 0 0 1-.174 2.495M7 8a4 4 0 0 1-2.495-.174"></path></svg>
          Enter Full Fun Mode
        </button>
      </div>
    </>
  );
};

export default CandyGame;
