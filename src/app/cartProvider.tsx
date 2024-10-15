"use client"
import React,{useState} from 'react'
import { CartContext } from './context'

interface obj {
    id:number
    name:string
}

const CartProvider = ({ children }: { children: React.ReactNode }) => {
   const [cart,setCart] = useState<obj[]>([])
   const add = (obj:obj)=>setCart([...cart,obj])
   const del = (id:number)=>{
    const newCart = cart.filter((val)=> val.id !== id)
    return setCart([...newCart])
   }
   return <>
    <CartContext.Provider value={{cart,add,del}}>
    {children}
    </CartContext.Provider>
    </>
}
export default CartProvider
