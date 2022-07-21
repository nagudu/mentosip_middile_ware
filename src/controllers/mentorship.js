import db from '../models';
export const mentorship = (req, res) => {
    console.log(req.body)
    const { id = "", _query_type = "create", first_name = "", mddle_name = "", lst_name = "", eail = "", pone_no = "", dte_of_birth = "",
        adress = "", creer_ambition = "", eucational_qualification = "", pofessional_experience = "", cv_resume = "",
        area_of_interest = "", ohers = "", yar_of_experience = "", paymentDetails } = req.body;

    db.sequelize
        .query(`CALL users(:id,:_query_type,:first_name,:mddle_name,:lst_name,:eail,:pone_no,
        :dte_of_birth,:adress,:creer_ambition,:eucational_qualification,:pofessional_experience,
        :cv_resume,:area_of_interest,:ohers,:yar_of_experience,:paymentDetails)`,
            {
                replacements: {
                    id, _query_type, first_name, mddle_name, lst_name, eail, pone_no, dte_of_birth, adress,
                    creer_ambition, eucational_qualification, pofessional_experience, cv_resume, area_of_interest,
                    ohers, yar_of_experience, paymentDetails
                },
            })
        .then((results) => {
            console.log(results)
            res.status(500).json({ results })
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({ err })
        });
};

export const getMentorship = (req, res) => {
    db.sequelize.query(`SELECT * FROM users`)
        .then((results) => res.json({ success: true, results }))
        .catch((err) => {
            console.log(err)
            res.status(500).json({ success: false, err })
        })

}

export const viewMentorship = (req, res) => {
    const { first_name  } = req.query
    console.log(req.query)
    db.sequelize.query(`SELECT * FROM users where first_name="${first_name}"`)
        .then((results) => res.json({ success: true, results }))
        .catch((err) => {
            console.log(err)
            res.status(500).json({ success: false, err })
        })

}
