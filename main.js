function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/GA1byk-ci/model.json', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}