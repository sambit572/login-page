const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const listingSchema=new Schema({
    name:String,
    email:String,
    age:Number,
    country:String
});

const Listing=mongoose.model("listing",listingSchema);
module.exports=Listing;