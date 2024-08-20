import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Typewriter from 'typewriter-effect';

import img2 from '@/assets/img2.jpeg'
import naruto from '@/assets/naruto.png'
import nervius from '@/assets/nervius.jpeg'
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
  export default function Home() {
    const [visible,setVisible] = useState(false)
    const [visible2,setVisible2] = useState(false)
    const [visible3,setVisible3] = useState(false)
    const [open,setOpen] = useState(true)
    const navigate = useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            setVisible(true)
        },
        27000)
        setTimeout(()=>{
            setVisible2(true)
        },
        32000)
        setTimeout(()=>{
            setVisible3(true)
        },
        44000)
        setTimeout(()=>{
          setOpen(false)
      },
      52000)
    },[visible,open])

    return (
        <div>

      <AlertDialog open = {open} onOpenChange={setOpen} >
        <AlertDialogTrigger asChild>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
            <div className="text-box text-violet-600">
        <Typewriter
          onInit={typewriter => {
            typewriter
              .typeString('Hola bella dama me da gusto verte ❤️𓍢ִ໋🌷͙֒')
              .pauseFor(2000)
              .start();
          }}
        />
      </div>
            </AlertDialogTitle>
            <AlertDialogDescription className="flex flex-col">
            <Typewriter
          onInit={typewriter => {
            typewriter
            .pauseFor(8000)
              .typeString('¡Holap! Quiero tomar un momento para decirte lo increíblemente agradecido que estoy por cada momento que compartimos juntos.👩‍❤️‍👨🌹')
              .start();
          }}
        />
        {visible?
              <img className="w-32 h-32 m-auto" src={img2} alt="img2" />
        :null}

        <Typewriter
          onInit={typewriter => {
            typewriter
            .pauseFor(29000)
              .typeString('A veces, eres enojona pero eres tierna jeje. 💗💕')
              .start();
          }}
        />
        {visible2?
              <img className="w-32 h-32 m-auto" src={nervius} alt="img2" />
        :null}

<Typewriter
          onInit={typewriter => {
            typewriter
            .pauseFor(38000)
              .typeString('Cada momento a tu lado, descubro una nueva razón para quererte más. Te quiero mucho💖')
              .start();
          }}
        />
        {visible3?
              <img className="w-32 h-32 m-auto" src={naruto} alt="naruto" />
        :null}
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
      <div className="flex gap-2 justify-center items-center flex-col mt-10">
        <p><span className="text-violet-600">De:</span> Du</p>
        <p><span className="text-violet-600">Para:</span> Ana mogola 💖</p>
        <img className="w-52" src={naruto} alt="" />
      <Button onClick={()=>{
          window.localStorage.removeItem("username")
          navigate("/")
        }}>Cerrar sesión💖</Button>
      </div>
        </div>

    )
  }
  