import mentorsDB from '../db/mentorsDB';

class viewMentors {
    getAllMentors(req,res){
        return res.status(200).send({
            success: 'true',
            message: 'connected successfully',
            details: mentorsDB
        });
    }
}
const viewmentors = new viewMentors();
export default viewmentors;