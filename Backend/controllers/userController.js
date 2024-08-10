import User from "../models/userModel.js";

export const getUsersForSidebar = async (req, res) => {
    try{

        const loggedUserId = req.user._id;

        const filterdUsers = await User.find({ _id: { $ne: loggedUserId } }).select("-password")

        res.status(200).json(filterdUsers);

    }catch(error){
        console.error("Error in getUsersForSidebar", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}