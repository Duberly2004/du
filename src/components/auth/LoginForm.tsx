"use client"

import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
  
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import Typewriter from 'typewriter-effect';
import img1 from '@/assets/img1.jpeg'
import { Toaster, toast } from "sonner"
import { useNavigate } from "react-router-dom"
const formSchema = z.object({
    username: z.string().min(2, {
      message: "Ingrese mínimo 2 cácteres",
    }),
    password:z.string().min(2,{
        message:"Ingrese mínimo 2 cácteres"
    })
  })
   
  
export default function LoginForm() {
    const navigate = useNavigate()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
          password: "",
        },
      })
     
    function onSubmit(values: z.infer<typeof formSchema>) {
        if(values.username.trim() !== "Carolyn-du"){
            toast.error("El usuario es incorrecto bb 🥰")
        }
        else if(values.password.trim() !== "Carolyn2004"){
            toast.error("La contraseña es incorrecta bb 🥰")
        }else{
            window.localStorage.setItem("username",values.username)
            window.localStorage.setItem("password",values.password)
            return navigate("/home")
        }
     }

  return (
    <Card className="w-[350px] mx-3 text-center">
        <Toaster richColors position="top-center"/>
        <a href="https://www.youtube.com/watch?v=2K7ihYwctVM&t=495s" target="_blank"><img src="https://scontent.flim38-1.fna.fbcdn.net/v/t1.6435-9/143114622_5139421002767234_1148416977537645664_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=a-MsU2BIJ-YAX9lJoGZ&_nc_ht=scontent.flim38-1.fna&oh=00_AfC32yOlss591YB79LqmVG3x33M_ATgrRmqcZu1_cI0epA&oe=6630D89F" alt="" /></a>
        <a  className="underline text-blue-600" href="https://www.facebook.com/Avalos.carolyn">Visita mi perfil</a>
      <CardHeader>
        <CardTitle>
        <div className="text-box">
        <Typewriter
          onInit={typewriter => {
            typewriter
              .typeString('Hola bella dama ❤️𓍢ִ໋🌷͙֒')
              .pauseFor(2000)
              .deleteAll()
              .typeString('Ingresa tus datos para entrar!! 💞')
              .start();
          }}
        />
      </div>
        </CardTitle>
        <CardDescription className="flex justify-center"><img className="w-20 h-20" src={img1} alt="img1" /></CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Usuario 🌹</FormLabel>
                    <FormControl>
                        <Input placeholder="Escribe tu usuario 💖" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Contraseña 🌹</FormLabel>
                    <FormControl>
                        <Input type="password" placeholder="Escribe tu Contraseña 💖" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
            />
            <Button className="w-full" type="submit">Entrar ❤️</Button>
        </form>
        </Form>
        </CardContent>
    </Card>
  )
}





