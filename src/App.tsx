import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";

interface PhoneType {
  id: string,
  name: string,
  description: string,
  price: number,
  status: string,
  category_id: string,
  created: string,
  updated: string
}

function App() {
  const [data, setData] = useState<PhoneType[]>([])

  async function getData(url:string) {
    const response = await fetch (url)
    const d = await response.json();
    setData(d)
  }


  useEffect(() =>{
    getData("https://auth-rg69.onrender.com/api/products/all")
    

  }, [])

  return (
    <div>
      <div className="container  mx-auto">
        <Form />

        <div className="card-wrapper flex flex-wrap justify-center max-w-1/4 gap-8">
         {
          data.length && data.map((phone, index) =>{
            return <Card key={index} data ={phone}/>
          })
         }
        </div>
      </div>
    </div>
  );
}

export default App;
