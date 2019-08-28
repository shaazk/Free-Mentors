import menteeDB from '../db/menteeDB';
import db from '../db/db';

class admin{

    getMentees(req,res){
        return res.status(200).send({
            success: 'true',
            details: menteeDB
        });
    }
    getMenteeById(req,res){
        const specificMentee = menteeDB.find(data => data.menteeId == req.params.menteeId);
        if(!specificMentee){
            return res.status(400).send({
                success: 'false',
                message: 'invalid id'
            })        
        }

        return res.status(200).send({
            success: 'true',
            details: specificMentee
        });
    }
    updateMentee(req,res){
        let menteeFound;
        let menteeIndex;

        menteeDB.map((mentee,index) => {
            if (mentee.id == req.params.id){
                menteeFound = mentee;
                menteeIndex = index;
            }
        });

        if(!menteeFound){
            return res.status(400).send({
                success: 'false',
                message: 'invalid id'
            })
        }

        const newMentee = {
            menteeId: menteeFound,
            firstName: req.body.firstName ,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            bio: req.body.bio,
            occuoation: req.body.occuoation,
            expertise: req.body.expertise,
            status: req.body.action || menteeFound.status        
        }
        menteeDB.splice(menteeIndex,1,newMentee);
         res.status(200).send({
            success: 'true',
            message: 'changed to mentor',
            menteeFound
        });
    }
    getAllUsers(req,res){
        res.status(200).send({
            success: 'true',
            details: db
        });    }
}
const Admin = new admin();
export default Admin ;