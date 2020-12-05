var natural = require('natural');
var classifier = new natural.BayesClassifier();

//Training Data
classifier.addDocument("How wonderful. Much fun today", "positive");
classifier.addDocument("The Green Bay Packers are better than ever! Woohoo", "positive");
classifier.addDocument("I am so excited for the warmest weather of the year this week", "positive");
classifier.addDocument("He is just my favorite. My absolute BFF.", "positive");
classifier.addDocument("Highly optimistic! All my stocks are rising.", "positive");
classifier.addDocument("Bitcoin tanked today, and I am very sad", "negative");
classifier.addDocument("The Jets just keep losing, why can't I be a Giants fan?", "negative");
classifier.addDocument("Horrible. I hate the flavor of pistachio ice cream.", "negative");
classifier.addDocument("Bad news. Mr Body was killed in the study with the trophy.", "negative");
classifier.addDocument("Terrible food, worse weather.", "negative");

//Train
classifier.train();


//Predict
console.log(classifier.classify("If the Dolphins win on Sunday I will scream in horrible, miserable agony."));