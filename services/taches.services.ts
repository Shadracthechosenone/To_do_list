import { db } from "../lib/db";

export const getTachebycategorie = async (id:number) => {

try{
    const taches = db.tache.findMany({
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