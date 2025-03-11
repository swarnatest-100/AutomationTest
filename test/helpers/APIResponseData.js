import request from 'supertest'

let payload = {
    email: "eve.holt@reqres.in",
    password: "cityslicka"
}
let payload1 = {
    "id": 0,
    "username": "ABCDE",
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "password": "string",
    "phone": "string",
    "userStatus": 0
  }

console.log(typeof request)

// async function GET()
// {
//     let res = await request("https://reqres.in").get("/api/users/2")
//     console.log(JSON.stringify(res.body))

// }

// GET()

// async function POST()
// {
//     let res = await request("https://reqres.in").post("/api/login")
//     .send(payload)
//     console.log(JSON.stringify(res.body))

// }

// POST()

async function POST(a)
{
    let res = await request("https://petstore.swagger.io").post("/v2/user")
    .send(payload1)
    console.log(JSON.stringify(res.body))

}
POST("ABC")