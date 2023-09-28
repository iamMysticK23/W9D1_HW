
import { ShopState } from '../customHooks';
import { CreateState } from "../components";


let accessToken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5NTg1NDcxMCwianRpIjoiZWU5NWZkNWUtMGM4Yi00ODQ5LWI1ZjYtYWFmYzIxN2MwNGFhIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IlJhbmdlcnMgMTI3IFc2IEhXIiwibmJmIjoxNjk1ODU0NzEwLCJleHAiOjE3MjczOTA3MTB9.u7gXhWYyXNY2LcRTUj1r9sUWDcEUNXu9VoB7NdW95EA" //our backend access_token from flask
let userId = localStorage.getItem('token') // our users signed into React, this is their userId

type PartialShop = Partial<ShopState>

export const serverCalls = {

    getShop: async () => {

        const response = await fetch(`https://car-inventory-flask-3gao.onrender.com/api/shop`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${accessToken}`
            }
        });

        console.log(response)

        if (!response.ok) {
            throw new Error('Failed to fetch data'), response.status  //error message & status code
        }

        return await response.json()
    },

    getOrder: async () => {

        const response = await fetch(`https://car-inventory-flask-3gao.onrender.com/api/order/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${accessToken}`
            }
        });

        console.log(response)

        if (!response.ok) {
            throw new Error('Failed to fetch data'), response.status  //error message & status code
        }

        return await response.json()
    },

    createOrder: async (data: CreateState) => {

        const response = await fetch(`https://car-inventory-flask-3gao.onrender.com/api/order/create/${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${accessToken}`
            },
            body: JSON.stringify(data)
        });

        console.log(response)

        if (!response.ok) {
            throw new Error('Failed to fetch data'), response.status  //error message & status code
        }

        return await response.json()
    },

    updateOrder: async (id: string, data: PartialShop) => {

        const response = await fetch(`https://car-inventory-flask-3gao.onrender.com/api/order/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${accessToken}`
            },
            body: JSON.stringify(data)
        });

        console.log(response)

        if (!response.ok) {
            throw new Error('Failed to fetch data'), response.status  //error message & status code
        }

        return await response.json()
    },

 deleteOrder: async (id: string, data: PartialShop) => {

        const response = await fetch(`https://car-inventory-flask-3gao.onrender.com/api/order/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${accessToken}`
            },
            body: JSON.stringify(data)
        });

        console.log(response)

        if (!response.ok) {
            throw new Error('Failed to fetch data'), response.status  //error message & status code
        }

        return await response.json()
    },
}