import {useState,useEffect} from 'react'

export default function Toast({message, open, onClose}){
  useEffect(()=>{
    if(open){
      const t = setTimeout(()=>onClose?.(),2500)
      return ()=>clearTimeout(t)
    }
  },[open])
  if(!open) return null
  return (
    <div role="status" aria-live="polite" className="fixed right-4 bottom-6 z-50">
      <div className="rounded-xl bg-white px-4 py-2 shadow-md border border-slate-200">{message}</div>
    </div>
  )
}
