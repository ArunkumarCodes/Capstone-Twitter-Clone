import ChatModel from "../Models/chatModel.js";

// Create chat
export const createChat = async (req, res)=>{
    const newchat = new ChatModel({
        members: [req.body.senderId, req.body.receiverId],
    });
    try{
        const result = await newchat.save();
        res.status(200).json(result);
    }catch (error){
        res.status(500).json(error);
    }
};

// UserChats
export const userChats = async (req, res) => {
  try {
    const chat = await ChatModel.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Finding Chat
export const findChat = async (req, res)=>{
    try{
        const chat = await ChatModel.findOne({
            member: { $all: [req.param.firstId, req.param.secondId]},
        })
        res.status(200).json(chat)
    }catch (error){
        res.status(500).json(error)
    }
};