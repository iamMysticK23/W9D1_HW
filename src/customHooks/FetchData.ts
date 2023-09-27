import * as React from 'react';
import { useState, useEffect } from 'react';


// internal imports
import { serverCalls } from '../api';

// interface that represents our Shop Items

export interface ShopState {
    id: string,
    name: string, 
    model: string,
    make: string,
    color: string,
    image: string,
    description: string,
    price: string,
    prod_id: string,
    year: number,
    miles: number,
    quantity: number
}

// interface to represent return of our hook

interface UseGetShopData {
    shopData: ShopState[]
    getData: () => void
}

// create our custom hook that gets called automatically when we go to the shop page
export const useGetShop = (): UseGetShopData => {
    // set hooks
    const [shopData, setData] = useState<ShopState[]>([])

    async function handleDataFetch(){
        const result = await serverCalls.getShop() // this is making our api call
        console.log(result)
        setData(result)
    }

    // useEffect takes in 2 arguments, 1 is the function to run, the other is the dependency it's monitoring
    useEffect( () => {
        handleDataFetch()
    }, []) // whatever its monitoring goes in this list

    return { shopData, getData: handleDataFetch }


}