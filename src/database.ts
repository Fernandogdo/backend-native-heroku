import { connect } from "mongoose";

export async function startConnection() {
    await connect('mongodb+srv://fernandogdo:pxndxsux17@cluster0.l8xmi.mongodb.net/?retryWrites=true&w=majority')
        .then(db => {
            console.log("DB is connect")
        })
        .catch(error => {
            console.log('error', error)
        })
}