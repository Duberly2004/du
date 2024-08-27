import { Button } from "@/components/ui/button"
import { useState } from "react"
import gato from '../assets/gato.webp'
export default function Home() {
  const [state,setState] = useState<Boolean>(false) 
  const [success,setSuccess] = useState<Boolean>(false)
  return (
    <section>
        <h1 className="text-center text-2xl mt-6">¿Eres mongola?</h1>
      <div className="flex justify-center mt-4 space-x-8">
        {state ?(
          <>
          <Button variant="destructive" onClick={()=>setState(!state)}>No</Button>
          <Button className="bg-blue-500 hover:bg-blue-400" onClick={()=>setSuccess(true)}>Yes</Button>
          </>
        ):
        (
          <>
        <Button className="bg-blue-500 hover:bg-blue-400" onClick={()=>setSuccess(true)}>Yes</Button>
        <Button variant="destructive" onClick={()=>setState(!state)}>No</Button>
          </>
      )}
      </div>
      {success&&(
        <>
        <p className="mt-5 text-center">Sabía que dirías que si mongola JAJAJ</p>
        <img className="mt-7 w-[200px] m-auto" src={gato} alt="gato" />
        </>
      )}
    </section>
  )
}
