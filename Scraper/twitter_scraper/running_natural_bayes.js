var natural = require('natural');

natural.BayesClassifier.load('nvclassifier.json',null,function(err,classifier){
	console.log(classifier.classify("If the Dolphins win on Sunday I will scream in horrible, miserable agony."));
})

