"use server"
import { db } from "../lib/db";

export const getTachebycategorie = async (id:number) => {

try{
    const taches = await db.tache.findMany({
        where: {
            categorieId : id
        }



    })

return taches 
}

catch(error){
    console.error('Une erreur en selectionnant les taches :',error);
    throw error 
}

}



export const createTache = async (task:any) =>{

    try{
        const result =await db.tache.create({
            data : {
                //id:Id,
             ...task
    
            }
          
    
        })
        return result 
    }
    
    catch(error){
    
        console.error("une erreur lors de creation de tache",error)
        return error
    }
    
    }
    
    