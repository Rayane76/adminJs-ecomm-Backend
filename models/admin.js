import mongoose from "mongoose";

const AdminSchema = ({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
})

const Admin = mongoose.models.Admins || mongoose.model("Admins",AdminSchema)

export default Admin;