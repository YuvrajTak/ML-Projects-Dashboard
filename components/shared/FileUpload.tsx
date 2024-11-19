"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function FileUpload() {
  const [file, setFile] = useState<any>(null);
  const [fileURL, setFileURL] = useState<any>(null);
  const [fileType, setFileType] = useState<any>(null);
  const [previewURL, setPreviewURL] = useState<any>(null);
  const [uploadProgress, setUploadProgress] = useState<any>(0);
  const [errorMessage, setErrorMessage] = useState<any>("");
  const [fetchedFileURL, setFetchedFileURL] = useState<any>(null);
  const [fetchedFileType, setFetchedFileType] = useState<any>(null);

  const onDrop = useCallback((acceptedFiles: any, fileRejections: any) => {
    if (fileRejections.length > 0) {
      const error = fileRejections[0].errors[0];
      setErrorMessage(error.message);
      return;
    }

    const selectedFile = acceptedFiles[0];
    const isImage = selectedFile.type.startsWith("image");
    const isVideo = selectedFile.type === "video/mp4";

    if (isImage || isVideo) {
      setFile(selectedFile);
      setFileType(isImage ? "image" : "video");
      setPreviewURL(URL.createObjectURL(selectedFile)); // Generate a preview URL
      setErrorMessage("");
    } else {
      setErrorMessage("Unsupported file type. Only images and MP4 videos are allowed.");
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxSize: 20 * 1024 * 1024, // 10MB limit
    multiple: false,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif"],
      "video/mp4": [".mp4"],
    },
  });

  const handleUpload = async () => {
    if (!file) {
      setErrorMessage("Please select or drag a file before uploading");
      return;
    }

    setUploadProgress(0);

    // Create a FormData object to send the file to the server
    const formData = new FormData();
    formData.append("file", file);

    try {
      // Start the upload process and update progress
      let url = `${process.env.NEXT_PUBLIC_BASE_URL}/upload`
      console.log("responseData",url)
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      // Simulate progress for UI updates
      const interval = setInterval(() => {
        setUploadProgress((prev: number) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 300);

      let responseData = ''
      if(!["image/jpeg", "image/jpg" ,"image/png"].includes(file?.type) ){
        alert("This video will take time predict each frame, you can take from server.")
        return
      }
     
    // if(responseData?.processed_video_path){
    //   let urlPath =  `${process.env.NEXT_PUBLIC_BASE_URL}/${responseData?.processed_video_path}`
    //   setFileURL(urlPath);
    //   return

    //  }
      const blob = await response.blob(); // Get the file as a Blob
      const contentType = blob.type;

      if (!["image/jpeg", "image/png", "video/mp4"].includes(contentType)) {
        throw new Error("Unsupported file type. Only images and MP4 videos are allowed.");
      }

      setFetchedFileType(contentType.startsWith("image") ? "image" : "video");
      setFetchedFileURL(URL.createObjectURL(blob)); // Generate a temporary URL for the fetched file




      setFileURL(URL.createObjectURL(blob)); // Assuming server returns a file URL
      setErrorMessage("");
    } catch (error: any) {
      setErrorMessage(error.message || "Upload failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#121417] flex items-center rounded-3xl justify-center">
      <div className="p-6 rounded-lg shadow-md w-full">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white text-left w-full bg-gradient-to-r from-blue-500 to-purple-500">
          File Upload
        </h1>
        <div
          {...getRootProps()}
          className={`#12181c59 border-2 border-dashed rounded-lg p-6 flex justify-center items-center transition-all duration-200 ${
            isDragActive
              ? "border-blue-400 bg-gray-700"
              : "border-gray-500 bg-[#12181c59]"
          }`}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="text-blue-400">Drop the file here...</p>
          ) : (
            <p className="text-gray-300">
              Drag and drop a file here, or{" "}
              <span className="text-blue-400">click to browse</span>
            </p>
          )}
        </div>
        {file && (
          <div className="mt-4">
            <p className="text-sm text-gray-300">
              Selected file:{" "}
              <span className="font-medium text-white">{file.name}</span>
            </p>
            <div className="mt-2 flex justify-center items-center">
              {fileType === "image" ? (
                <img
                  src={previewURL}
                  alt="Preview"
                  className="w-[40%] h-[40vh] object-cover rounded"
                />
              ) : (
                <video
                  controls
                  className="w-[40%] h-[40vh] rounded"
                  src={previewURL}
                />
              )}
            </div>
          </div>
        )}
        {errorMessage && (
          <p className="text-sm text-red-500 mt-2">{errorMessage}</p>
        )}
        <button
          type="button"
          onClick={handleUpload}
          className="mt-4 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-2 px-4 rounded-lg hover:from-purple-600 hover:via-pink-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-purple-300 shadow-lg"
        >
          Upload
        </button>
        {uploadProgress > 0 && (
          <div className="mt-4">
            <div className="relative h-4 w-full bg-gray-600 rounded">
              <div
                className="absolute top-0 left-0 h-4 bg-blue-600 rounded"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
            <p className="text-sm text-gray-300 mt-2">
              Upload progress: {uploadProgress}%
            </p>
          </div>
        )}
        {fileURL && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-300">
              Uploaded File:
            </h2>
            {fileType === "image" ? (
              <div className="mt-2 flex justify-center items-center">
              <img
                src={fileURL}
                alt="Uploaded File"
                className="w-[40%] h-[40vh] object-cover rounded mt-2"
              />
              </div>
            ) : (
              <>
              <h3>
                This video will take time predict each frame, you can take from server.
              </h3>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
