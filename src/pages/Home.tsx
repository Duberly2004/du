import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import pedro from "../assets/pedro-pedro.gif"
import { User, users } from "./data";
export default function Home() {
  const [search,setSearch] = useState<string>("")
  const [loading,setLoading] = useState<boolean>(false)
  const [noResults,setNoResults] = useState<boolean>(false)
  const [user,setUser] = useState<User>()
  const onSearch = () => {
    setLoading(true)
    setTimeout(()=>{
      const user = users.find(user=>user.emotion.toLowerCase()===search)
      if(user){
        setUser(user)
        setNoResults(false)
      }else{
        setNoResults(true)
      }
      setLoading(false)
    },4000)
    console.log(search)
  }

  return (
<div className="text-center">
  <div className="max-w-md m-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
    <h1 className="text-3xl font-extrabold text-gray-800 mb-6">
      Encontrar personas por palabras clave
    </h1>
    <p className="text-left text-gray-600 mb-4">
      Bienvenid@ a nuestra plataforma. Escribe una palabra clave para buscar a esa persona.
    </p>
    <div className="flex items-center space-x-4 mb-6">
      <Input
        onChange={(e) => {
          setNoResults(false);
          setSearch(e.target.value.toLowerCase());
        }}
        placeholder="Escribe aquí"
        type="search"
        className="w-full px-4 py-2 border rounded-md focus:ring focus:outline-none"
      />
      <Button
        disabled={search.length === 0}
        onClick={onSearch}
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:opacity-50"
      >
        Buscar
      </Button>
    </div>
    {loading && <Loading />}
    {user && (
      <div className="mt-6 text-left">
        <h2 className="text-xl font-bold text-gray-700 mb-2">
          Se encontraron coincidencias con la búsqueda
        </h2>
        <p className="text-lg font-medium text-gray-700 mb-1">
          Resultados para emoción: <span className="text-blue-600">{user.emotion}</span>
        </p>
        <p className="text-lg text-gray-600 mb-4">Nombre: <span className="text-blue-600">{user.name}</span></p>
        <img
          src={user.photo}
          alt="user"
          className="w-44 h-44 rounded-3xl border-2 border-blue-500 object-cover mx-auto mb-4"
        />
        <p className="text-md font-semibold text-gray-700 mb-2">
          Razones por las que es {user.emotion}:
        </p>
        <ul className="list-disc list-inside text-left text-gray-600 space-y-1">
          {user.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    )}
    {noResults && (
      <p className="py-4 text-red-500">
        No se encontraron resultados para: <b>{search}</b>
      </p>
    )}
  </div>
</div>

  )
}

function Loading() {
  return(
    <div className="flex justify-center flex-col items-center my-4">
    <img width={200} src={pedro} alt="pedro pedro" />
    <p>Buscando...</p>
  </div>
  ) 
}