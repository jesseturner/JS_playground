import { GaussianNB } from 'ml-naivebayes';

var model = new GaussianNB();
model.train(Xtrain, Ytrain);

var predictions = model.predict(Xtest);

