function heartRate(){
    const restingHR = Number(prompt('Enter resting reart rate'))
    const age = Number(prompt('Enter your age'));
    for(let intensity = 55 ; intensity <= 95; intensity++){
      let TargetHeartRate = (((220 - age) - restingHR) * intensity) + restingHR;
      console.log(`${intensity}% - ${TargetHeartRate}`)
    }
  } 
  heartRate();