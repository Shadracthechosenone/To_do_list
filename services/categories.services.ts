import { db } from "../lib/db";

export const getAllcategories = async () => {
    try{
        const categories = await db.categorie.findMany({

            select: {
                id: true,
                Name: true,
              },
              
            orderBy:{
            createdAt: "desc",
        },
     
        }
) 

return categories 
}catch(error){

    console.error("Error getting categories:", error);
    throw error;
}
}
