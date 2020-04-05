const request=require('request')
const forecast=(a,b,callback)=>{
    const url='https://api.darksky.net/forecast/cb0adbab53df73de6a137e5a4b966801/'+a+','+b
    request({url,json:true},(error,{body})=>{
        if(error)
        {
            callback('Unable to connect to weather services!',undefined)
        }
        else if(body.error)
        {
           callback('Unable to find location',undefined)
        }
        else{
            callback('Current Forecast->'+body.daily.data[0].summary+'It is currently'+body.currently.temperature+'degrees out. There is a'+body.currently.precipProbability+'% chance of rain. Humidity is '+body.currently.humidity)
        }
    })
}
module.exports=forecast