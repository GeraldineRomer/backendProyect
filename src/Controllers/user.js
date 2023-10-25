const User = require("../Models/user");
const mongoose = require("mongoose");
const { post } = require("../Routes/user");

const createUser = async(req, res) => {
    try {
        const user = new User({
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            country : req.body.country,
            department : req.body.department,
            municipality : req.body.municipality,
            document_type : req.body.document_type,
            document : req.body.document,
            email : req.body.email,
            password : req.body.password,
            avatar : req.body.avatar,
            role : req.body.role,
            active: req.body.role
        });
        const userStored = await user.save();
        if(!userStored){
            return res.status(404).send({
                message : "No se ha podido guardar el user",
            })
        }
        res.status(200).send({
            user : userStored,
        });
    } catch (error) {
        res.status(500).send({
            message: "Error en el servidor.",
        })
    }
}

const getUsers = async (req, res) => {
    try {
        const {page = 1, limit = 10} = req.query;
        const pageNumber = parseInt(page);
        const limitNumber = parseInt(Limit);
        if (isNaN(pageNumber) || isNaN(limitNumber)) {
            return res.status(400).send({
                message:"Los parametros de paginación deben ser numeros validos. ",
            });
        } 
        const options = {
            page: pageNumber,
            limit: limitNumber,
            sort: {date: "desc"},
        };
        const users = await user.paginate({}, options);

        if (!users || users.totalPages === 0){
            return res.status(404).send({
                message: "No se ha encontrado ningún usuario"
            });
        }

        res.status(200).send({
            users,
        });
    } catch (err) {
        console.error(err);
        res.status(500).send({
            message: "Error en el servidor al obtener usuarios",
        })
    }
}
const getUser = async (req, res) => {
    //Logica para obtener un usuario en especifico
    try {
        const { id } = req.params;
        if(!id){
            return res.status(400).send({
                message: "El id del usuario es obligatorio. ",
            });
        }

        const user = await post.findById(id);
        if(!user) {
            return res.status(404).send({
                message: "No se ha encontrado ningún usuario. ",
            })
        }

        res.status(200).send({
            user,
        });
    } catch (err) {
        console.error(err);
        res.status(500).send({
            message: "Error en el servidor al obtener el usuario. ",
        });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;

        if(!id) {
            return res.status(400).send({
                message: "El id del post es obligatorio.",
            });
        }

        const updates = req.body;

        const user = await post.findByIdAndUpdate(id, updates, {new: true});

        if (!user){
            return res.status(404).send({
                message: "No se ha encontrado ningún user.",
            });
        }

        res.status(200).send({
            user,
        });
    } catch (err) {
        console.error(err);
        res.status(500).send({
            message: "Error en el servidor al actualizar el usuario. ",
        });
    }
};

const deleteUser = async(req, res) => {
    try{
        const { id } = req.params;

        if (!id) {
            return res.status(400).send({
                message: "El id del usuario es obligatorio.",
            });
        }
        const deletedUser = await post.findByIdAndDelete(id);

        if (!deletedPost) {
            return res.status(404).send({
                message: "No se ha encontrado ningun usuario.",
            });
        }
        res.status(200).send({
            message: "El usuario ha sido eliminado exitosamente.",
        });
    } catch (err) {
        console.error(err);
        res.status(500).send({
            message: "Error en el servidor al eliminar el usuario.",
        });
    }
};

module.exports = {
    createUser, 
    getUsers,
    getUser,
    updateUser,
    deleteUser,
};