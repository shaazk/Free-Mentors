import mentorsDB from '../db/mentorsDB';

class specificMentor{
    getMentor(req,res){
        const mentor = mentorsDB.find(data =>data.mentorId == req.params.mentorId);
        if(!mentor){
            return res.status(400).send({
                success: 'false',
                message: 'invalid id'
            });

        }
        return res.status(200).send({
            success: 'true',
            message: 'valid id',
            details: mentor
        });
    }
}
const viewSpecificMentor = new specificMentor();
export default viewSpecificMentor;