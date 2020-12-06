var bayes = require('bayes')
 
//program() {

	var classifier = bayes() 
	 
	// teach it positive phrases
	 
	classifier.learn('amazing, awesome movie!! Yeah!! Oh boy.', 'positive')
	classifier.learn('Sweet, this is incredibly, amazing, perfect, great!!', 'positive')
	console.log('learned positive');
	// teach it a negative phrase
	 
	classifier.learn('terrible, shitty thing. Damn. Sucks!!', 'negative')
	console.log('learned negative');
	 
	// now ask it to categorize a document it has never seen before
	 
	decision = classifier.categorize('awesome, cool, amazing!! Yay.')
	console.log(decision);
	// => 'positive'
	 
	// serialize the classifier's state as a JSON string.
	var stateJson = classifier.toJson()
	 
	// load the classifier back from its JSON representation.
	var revivedClassifier = bayes.fromJson(stateJson)

//}