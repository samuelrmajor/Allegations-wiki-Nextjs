
const getPerpsFiltered = async (myname) => {
    return [
      {
        fullname: "JOHN F KENNEDY",
        imageurl:
          "https://static.life.com/wp-content/uploads/migrated/2013/10/131030-jfk-1947-senator-01.jpg",
        webid: "JFK_WEBID",
        perpdesc: "JFK_PERPDESC",
      },
      {
        fullname: "fakename",
        imageurl: null,
        webid: "FAKEWEBID",
        perpdesc: "fakeperpdesc",
      },
    ];
};

const getSpecificPerp = async (mywebid) => {
  //CREATE NEXTJS API
};

const getRandomPerp = async () => {
    //CREATE NEXTJS API
};

const votePerp = async (mywebid, myvote) => {
    //CREATE NEXTJS API
};


export default {
  getPerpsFiltered,
  getSpecificPerp,
  getRandomPerp,
  votePerp,
};
