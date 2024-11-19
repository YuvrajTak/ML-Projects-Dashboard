"use client"
import React, { lazy, Suspense } from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
import ProgressBar from './ProgressBar'

const RunnerGame = () => {

  function handleClickEnterFullscreen() {
    requestFullscreen(true);
  }
  const { loadingProgression, isLoaded, requestFullscreen, unityProvider } = useUnityContext({
    loaderUrl: "/assets/runner/EndlessRunner.loader.js",
    dataUrl: "/assets//runner/webgl.data",
    frameworkUrl: "/assets//runner/build.framework.js",
    codeUrl: "/assets//runner/build.wasm",
  });

  return (
    <>
      <div>
        {!isLoaded &&
          (
            <div>
              <ProgressBar progress={Math.round(loadingProgression * 100)} />
              <h1>Thoda Sa Ruk Loading... {Math.round(loadingProgression * 100)}%</h1>
            </div>
          )}

      <Suspense fallback={<div className="text-white">Loading Unity...</div>}>
        <Unity unityProvider={unityProvider} style={{ width: "100%", height: "86vh" }} />
      </Suspense>

        {/* <div className='w-full mt-4 flex align-middle justify-center'>
        <button className="px-6 py-3 font-semibold text-white rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-purple-300 shadow-lg" onClick={handleClickEnterFullscreen}>
        Enter Full Fun Mode
        </button>
        </div> */}
      </div>
    </>
  );
};

export default RunnerGame;
