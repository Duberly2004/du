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
        if(values.username.trim() !== "orianis"){
            toast.error("El usuario es incorrecto 🥰")
        }
        else if(values.password.trim() !== "orianis00"){
            toast.error("La contraseña es incorrecta 🥰")
        }else{
            window.localStorage.setItem("username",values.username)
            window.localStorage.setItem("password",values.password)
            return navigate("/home")
        }
     }

  return (
    <Card className="w-[350px] mx-3 text-center">
        <Toaster richColors position="top-center"/>
      <CardHeader>
        <CardTitle>
        <div className="text-box">
        <Typewriter
          onInit={typewriter => {
            typewriter
              .typeString('Hola')
              .pauseFor(2000)
              .deleteAll()
              .typeString('Ingresa tus datos para entrar!!')
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





