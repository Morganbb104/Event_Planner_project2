// <<<<<<< HEAD
// // const { User } = require('../../models');
// =======
// >>>>>>> 44d760bd0f9771241f6068e2dbc2d1119bf98f01

const router = require('express').Router();
const session = require('express-session');
const path = require('path');
const User = require('../../models/User');






// adding new user through signup form 
router.post('/signup', async (req, res) => {
    const signupdata = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password

    };
    try {
        const userData = await User.create(signupdata);
        if (!userData) {
            res.status(404).json({ message: 'please take look on your information again,it seems you had a mistake through write it' })
            return
        }
        req.session.save(() => {
          req.session.loggedIn = true;
          res.json({
            message: `Your Email has beed added sucessfully \n--------------------------------------------
                ${userData.email} Please go to Login page to sign in`,
            code: 201
          });
        });

    } catch (err) {
        res.status(404).json({message:'Invalid Email or password'})
    }
    // req.session.save(() => {
    //   req.session.loggedIn = true;
    //   res.json({
    //     message: `Your Email has beed added sucessfully \n--------------------------------------------
    //         ${userData.email} Please go to Login page to sign in`,
    //   });
    // });
});

// display stored User data
router.get('/', async (req, res) => {
  const a = await User.findAll({ raw: true });
  req.session.save(() => {
    if (req.session.countVisit) {
      req.session.countVisit++;
      console.log(req.session.countVisit);
    } else {
      req.session.countVisit = 1;
      console.log(req.session.countVisit);
    }
    res.json(a);
  });
});

//check user info through signin page
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { email: req.body.email },
    });

    if (!userData) {
      res.status(404).json({ message: 'Invalid Email' });
      return;
    }

    const ValidPassword = await userData.checkPassword(req.body.password);
    if (!ValidPassword) {
      res.json({ message: 'wrong password' });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req, (session.logged_in = true);

      res.status(200).json({ message: 'Your logging in', status: 200, userInfo: userData });
    });
  } catch (err) {
    res.status(404).json({ message: 'check email or password and try again' });
  }
});

// route to update user info
router.put('/update',async (req, res) => {
  const checkEmail=await User.findOne({where:{email:req.body.email}});
  console.log(checkEmail)
  console.log('email checked')
  const checkPassword= await checkEmail.checkPassword(req.body.oldPassword);
  console.log(checkPassword)
  if(checkPassword===true){
const updateData=await User.update({password:req.body.newPassword},{
  where:{ email:req.body.email},
  individualHooks:true
});
console.log('after update')
res.json({message:"updated"})  
}else{
res.json({message:"please check your email or password and Try Again!!!"})
  }
});




module.exports = router;
