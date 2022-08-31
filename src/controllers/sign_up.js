import db from "../models";
export const 	sign_up = (req, res) => {
    const{
      id ="",
     
        name = "",
        last_name = "",
        email = "",
        password = "",
    } = req.body;
    const { query_type ="",}=req.query;

    db.sequelize
    .query(`CALL 	sign_up(:id,:query_type,:name,:last_name,:email,:password)`, {
      replacements: { id, query_type, name, last_name, email, password},
    })
    .then((results)=>res.status(500).json({results}))
    .catch((err) => res.status(500).json({ err }));
};

export const sign_in = (req, res) => {
  const {  email, password, } = req.body;
  db.sequelize
      .query(`SELECT * FROM signup WHERE email="${email}" and password="${password}"`)
      .then((results) => {
          if(results[0].length){
              res.json({ loggedIn: true, user: results[0] })
          } else {
              res.json({ loggedIn: false, message: "Email or password is not correct" })
          }
      })
      .catch((err) => {
          console.log(err)
          res.json({ err, success: false })})
}; 

