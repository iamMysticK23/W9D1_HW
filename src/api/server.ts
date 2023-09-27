let accessToken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5NTc4NzI0MywianRpIjoiNDU1MWJlNjYtNTZmMS00Nzc3LWFiNzctNmRhZjI3ODFkOTc0IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IlJhbmdlcnMgMTI3IFNxdWFkIiwibmJmIjoxNjk1Nzg3MjQzLCJleHAiOjE3MjczMjMyNDN9.b7rpAZpTRFiboTXdAwmGcsgLHFGKBptGdOpGvy6h8Pc" //our backend access_token from flask
let userId = localStorage.getItem('token') // our users signed into React, this is their userId


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
    }
}