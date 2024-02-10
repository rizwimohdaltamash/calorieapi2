const express=require("express")
const app=express()
const mongoose=require("mongoose")
const User=require('./users')

mongoose.connect('mongodb://127.0.0.1:27017/calo')
const db=mongoose.connection
db.once('open',async()=>{
if(await User.countDocuments().exec()>0) return;

Promise.all([
User.create({
    name: "Roti",
    calories: 80
  }),
User.create({
    name: "ChickenFriedRice",
    calories: 350
  }),
User.create( {
    name: "MatarPulao",
    calories: 250
  }),
User.create({
    name: "AlooMethi",
    calories: 180
  }),
User.create( {
    name: "EggCurry",
    calories: 300
  }),
User.create(  {
    name: "CabbageSabzi",
    calories: 120
  }),
User.create({
    name: "DalTadka",
    calories: 200
  }),
User.create( {
    name: "JeeraRice",
    calories: 150
  }),
User.create( {
    name: "FishFry",
    calories: 250
  }),
User.create( {
    name: "AlooBaingan",
    calories: 160
  }),
User.create( {
    name: "Chapati",
    calories: 70
  }),
User.create( {
    name: "MixedVegetableCurry",
    calories: 220
  }),
User.create( {
    name: "CucumberRaita",
    calories: 90
  }),
User.create({
    name: "MushroomMasala",
    calories: 280
  }),
User.create( {
    name: "TofuBhurji",
    calories: 200
  }),
User.create({
    name: "PalakKhichdi",
    calories: 230
  }),
User.create( {
    name: "GobiManchurian",
    calories: 300
  }),
User.create({
    name: "VegetableSambar",
    calories: 180
  }),
User.create( {
    name: "MasoorDal",
    calories: 160
  }),
User.create( {
    name: "EggBhurji",
    calories: 220
  }),
User.create({
    name: "LaukiKofta",
    calories: 250
  }),
User.create({
    name: "PumpkinSabzi",
    calories: 140
  }),
User.create( {
    name: "ChickenKebabs",
    calories: 280
  }),
User.create( {
    name: "TomatoRasam",
    calories: 100
  }),
User.create({
    name: "CapsicumRice",
    calories: 200
  }),
User.create({
    name: "Biryani",
    calories: 350
  }),
User.create( {
    name: "ButterChicken",
    calories: 450
  }),
User.create({
    name: "PaneerTikka",
    calories: 200
  }),
User.create( {
    name: "MasalaDosa",
    calories: 300
  }),
User.create({
    name: "CholeBhature",
    calories: 600
  }),
User.create( {
    name: "TandooriRoti",
    calories: 150
  }),
User.create({
    name: "Samosa",
    calories: 200
  }),
User.create({
    name: "AlooGobi",
    calories: 250
  }),
User.create( {
    name: "PalakPaneer",
    calories: 300
  }),
User.create( {
    name: "DalMakhani",
    calories: 350
  }),
User.create( {
    name: "Rasgulla",
    calories: 100
  }),
User.create( {
    name: "GulabJamun",
    calories: 150
  }),
User.create({
    name: "PavBhaji",
    calories: 400
  }),
User.create({
    name: "RajmaChawal",
    calories: 350
  }),
User.create({
    name: "KadaiChicken",
    calories: 500
  }),
User.create( {
    name: "AlooParatha",
    calories: 300
  }),
User.create( {
    name: "ChickenBiryani",
    calories: 400
  }),
User.create( {
    name: "MangoLassi",
    calories: 200
  }),
User.create({
    name: "PaniPuri",
    calories: 100
  }),
User.create( {
    name: "Pulao",
    calories: 350
  }),
User.create( {
    name: "ChickenCurry",
    calories: 450
  }),
User.create( {
    name: "IdliSambar",
    calories: 250
  }),
User.create( {
    name: "Jalebi",
    calories: 300
  }),
User.create({
    name: "ChickenKorma",
    calories: 400
  }),
User.create({
    name: "VegetableBiryani",
    calories: 300
  }),
User.create({
    name: "Dhokla",
    calories: 150
  }),
User.create( {
    name: "AlooTikki",
    calories: 180
  }),
User.create( {
    name: "FishCurry",
    calories: 350
  }),
User.create( {
    name: "MuttonRoganJosh",
    calories: 500
  }),
User.create({
    name: "Pesarattu",
    calories: 200
  }),
User.create( {
    name: "Kheer",
    calories: 250
  }),
User.create( {
    name: "BainganBharta",
    calories: 220
  }),
User.create( {
    name: "ChickenTikka Masala",
    calories: 400
  }),
User.create( {
    name: "PapdiChaat",
    calories: 120
  }),
User.create({
    name: "MysorePak",
    calories: 180
  }),
User.create( {
    name: "ChickenSaagwala",
    calories: 420
  }),
User.create( {
    name: "AlooMatar",
    calories: 230
  }),
User.create({
    name: "FishBiryani",
    calories: 380
  }),
User.create( {
    name: "BhindiMasala",
    calories: 200
  }),
User.create( {
    name: "ChanaMasala",
    calories: 300
  }),
User.create({
    name: "KoftaCurry",
    calories: 350
  }),
User.create( {
    name: "Raita",
    calories: 80
  }),
User.create( {
    name: "KeemaParatha",
    calories: 320
  }),
User.create({
    name: "CoconutChutney",
    calories: 90
  }),
User.create( {
    name: "ShahiTukda",
    calories: 250
  }),
User.create( {
    name: "PrawnCurry",
    calories: 400
  }),
User.create({
    name: "VegetableKorma",
    calories: 280
  }),
User.create( {
    name: "Chicken65",
    calories:300
  }
)


]).then(()=>console.log('Added Users'))
})

const port=process.env.PORT || 3000;

   
  
app.get('/users',paginatedResults(User),(req,res)=>{
    res.json(res.paginatedResults);
})

function paginatedResults(model){
    return async(req,res,next)=>{
        const page=parseInt(req.query.page)
        const limit=parseInt(req.query.limit)
    
        const startIndex=(page-1)*limit
        const endIndex=page*limit
    
        const results={}
    
        if(endIndex<await model.countDocuments().exec()){
            results.next ={
                page: page+1,
                limit:limit
            } 
        }
        
    
        if(startIndex>0){
            results.previous ={
                page: page-1,
                limit:limit
            } 
        }
        
    try{
        results.results= await model.find().limit(limit).skip(startIndex).exec()
        res.paginatedResults =results
        next()
    }catch(e){
      res.status(500).json({message:e.message})
    }
         
        
          
         
    }
}


app.listen(port,()=>{
    console.log(`connection is live at port ${port}`);
})