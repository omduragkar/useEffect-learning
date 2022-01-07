const express = require('express')
const app = express()
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.post("/api/user", (req, res)=>{
  // console.log(req.body);
  if(req.body.id === "1234"){

    res.status(200).json({
      "users": [
        {
          "id": 0,
          "name": "Adam Carter",
          "work": "Unilogic",
          "email": "adam.carter@unilogic.com",
          "dob": "1978",
          "address": "83 Warner Street",
          "city": "Boston",
          "optedin": true
        },
        {
          "id": 1,
          "name": "Leanne Brier",
          "work": "Connic",
          "email": "leanne.brier@connic.org",
          "dob": "1987",
          "address": "9 Coleman Avenue",
          "city": "Toronto",
          "optedin": false
        }
      ],
      "images": [
        "img0.png",
        "img1.png",
        "img2.png"
      ],
      "coordinates": {
        "x": 35.12,
        "y": -21.49
      },
      "price": "$59,395"
    })
  }else{
    res.status(400).json({
      status:"Not Authorized"
    })
  }
})
app.post("/api/check", (req, res)=>{
  // console.log(req.body);
  if(req.body.id === "1234"){

    res.status(200).json({
      status:"authenticated"
    })
    
  }else{
    
    res.status(400).json({
      status:"Not Authorized"
    })
  }
})
// app.use('/api', require('./routes/'));
let port = 5000;
app.listen(port, (err)=>{
  if(err)
  {
    console.log(err);
  }
  console.log(`Server started at ${port}`);
})