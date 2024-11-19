"use client"

import { redirect } from "next/navigation";


import { useState } from "react";

async function Page(){

 const [chartList, setChartList] =useState([])


  return (
    <section>
      <h1 className='head-text mb-10'>Search</h1>

     

      <div className='mt-14 flex flex-col gap-9'>
        {chartList?.length === 0 ? (
          <p className='no-result'>No Result</p>
        ) : (
          <>
            
          </>
        )}
      </div>

     
    </section>
  );
}

export default Page;
