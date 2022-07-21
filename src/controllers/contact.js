import db from '../models';
export const contact = (req, res) => {
    const {custormer="", product="", recieved="", issured="" } = req.body;
    
    db.sequelize
      .query(`CALL contact(:custormer,:product,:recieved,:issured)`, {
        replacements: { custormer, product, recieved, issured},
      })
      .then((results)=>res.status(500).json({results}))
      .catch((err) => res.status(500).json({ err }));
  };
  