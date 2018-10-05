const db = require('./models');


const cheddar = {
  title: 'cheddar cheese',
  origin: 'Wisconsin'
}

const cheesyQuiche ={
  name: 'Quiche',
  ingredients: []
}

db.Ingredient.create( cheddar, (err, savedCheese) =>{
  if (err) return console.log(`404 Ingredient Not Found ${err}`);
  console.log(`Ingredient saved successfully`);
  db.Food.create(cheesyQuiche, (err, savedQuiche)=>{
    if (err) return console.log(`404 Food Not Found ${err}`);
    savedQuiche.ingredients.push(savedCheese);
    savedQuiche.save( (err, savedQuiche) =>{
      if(err) return console.log(`Food Not Saved ${err}`);
      console.log(`Cheesy Food is ${savedQuiche}`);
    });
  });
});

db.User.deleteMany({}, (err, removedUsers) =>{
  if (err) throw err;
  db.Tweet.deleteMany({}, (err, removedTweets) =>{
    if(err) throw err;
    db.Tweet.create({message: 'This is a tweet'}, (err, savedTweet) =>{
      if (err) throw err;
      db.User.create({name: 'JoeJoe'}, (err, savedUser)=>{
        if (err) throw err;
        savedUser.tweets.push(savedTweet);
        savedUser.save( (err, savedUser) =>{
          if(err) throw err;
          console.log(`Cheesy Food is ${savedUser}`);
        });
      });
    });
  });
});
