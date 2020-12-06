const MonkeyLearn = require('monkeylearn')

const ml = new MonkeyLearn('568251224985c3a648567ad1130052f243a483a5')
let model_id = 'cl_XUv3ja2R'
let data = ["Hell yes"]
ml.classifiers.classify(model_id, data).then(res => {
    console.log(res.body)
})