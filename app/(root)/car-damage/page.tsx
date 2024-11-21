import React from 'react'
import FileUpload from "@/components/shared/FileUpload";




function page() {

    const handleFileUpload = (files: FileList | null) => {
        if (files) {
          console.log("Uploaded Files:", Array.from(files));
        }
      };


  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-6 text-2xl font-bold">File Upload Component</h1>
      <FileUpload/>
    </div>
  )
}

export default page