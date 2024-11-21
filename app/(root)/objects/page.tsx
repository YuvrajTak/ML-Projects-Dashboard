import React from 'react'
import FileUploadObj from "@/components/shared/FileUploadObj";




function page() {

    const handleFileUpload = (files: FileList | null) => {
        if (files) {
          console.log("Uploaded Files:", Array.from(files));
        }
      };


  return (
    <>
    <h1 className="mb-6 text-2xl font-bold">File Upload Component</h1>
    
    <div className="bg-[#121417] flex min-h-screen flex-col items-center justify-cente">
    
      <FileUploadObj/>
    </div>
    </>
  )
}

export default page