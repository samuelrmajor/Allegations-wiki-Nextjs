import prisma from "./prisma";

// const getPerpsFiltered = async (myname) => {
//     const myPerps = await prisma.Perp.findMany({
//         where:{
//             FULLNAME: {
//                 contains: myname,
//                 mode: 'insensitive'
//             }
//         },
//         take: 15
//     })

//     return myPerps

// };
//test

const getSpecificPerp = async (mywebid) => {
  const myPerp = await prisma.perp.findUnique({
    where:{
        WEBID: mywebid
    }
  })

    //Will have to move the logic of updateViewCount
//     const myUpdate = await prisma.Perp.updateUnique({
//     where:{
//         WEBID: mywebid
//     }
//   })
  return myPerp;
}


const getRandomPerp = async () => {
//   const { data, error, status } = await supabase.rpc("get_random_perp");
//   if (error) return "Error - Random Perp Search failed";
//   return data;
};



const votePerp = async (mywebid, myvote) => {
//   const { data, error, status } = await supabase.rpc("add_status_vote", {
//     myvote,
//     mywebid
//   });
//   if (error) return "Error - Vote failed";
//   return data;
};


const getTopPerps = async () => {

}

export default { getSpecificPerp, getRandomPerp, votePerp, getTopPerps};

