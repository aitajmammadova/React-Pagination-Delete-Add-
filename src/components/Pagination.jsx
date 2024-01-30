import React from 'react'


function Pagination({activePage,setActivePage,totalPage}) {
    
   
    const pages=[]
    for (let i=1;i<=totalPage;i++){
        pages.push(i)
    }
     
  return (
    <>
    <ul>
    {pages.map((page,b)=>(
    <li onClick={()=>setActivePage(page)} className={page===activePage? "active": ""} key={b}>{page}</li>))}
    </ul>
    </>
  )
}

export default Pagination