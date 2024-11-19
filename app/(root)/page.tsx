
import { redirect } from "next/navigation";
import FileUpload from "@/components/shared/FileUpload";


function Home() {



  const handleFileUpload = (files: FileList | null) => {
    if (files) {
      const fileArray = Array.from(files);
      console.log("Uploaded Files:", fileArray);
    }
  };



  return (
    <>
       <h1 className='head-text text-left mb-4 w-full'>Car Damege Detection Panel</h1>

      {/* <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100"> */}
     
     <FileUpload /> 
    {/* </div> */}
    
    </>
  );
}

export default Home;
