import db from "../models";

export const profile_questions = (req, res) => {
    const {
        user_id = "",
        name = "",
        lastName = "",
        dateOfBirth = "",
        email = '',
        phoneNumber = "",
        stateYouLiveIn = "",
        created_at = ""
    } = req.body;

    console.log(req.body)


    db.sequelize.query(`INSERT INTO users(
            id, 
            first_name,
            last_name,
            date_of_birth, 
            email,
            phone_no, 
            state_you_live
            )
            VALUES 
            ('${user_id}','${name}','${lastName}','${dateOfBirth}','${phoneNumber}','${stateYouLiveIn}','${email}')`)
        .then((results) => {
            Object.keys(req.body).forEach(item => {
                db.sequelize.query(`INSERT INTO profile_questions(
                            user_id, 
                            question, 
                            answer, 
                            category, 
                            created_at
                            )
                            VALUES 
                            ('${user_id}','${item}','${req.body[item]}','${req.body[item]}','${created_at}')`)
                    .catch((err) => {
                        console.log(err)
                        res.status(500).json({ err })
                    })
            })
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({ err })
        }) 


}