import { firestore } from "./Firebase"

export var sendFeedback = async(feedbackObj) =>{
    if(feedbackObj.Name!=='' && feedbackObj.Message!=='')
    {
        await firestore.collection('Feedbacks').doc().set(feedbackObj)
        alert("Thankyou for your feedback.")
    }
    else {
        alert("Please Fill Both The Fields.")
    }
}

export var sendRequest = async(reqObj) =>{
    if(reqObj.colorCode!=='' && reqObj.Category!=='')
    {
        await firestore.collection('NewColorRequests').doc().set(reqObj)
        alert("Thankyou for your request we'll add new color codes asap.")
    }
    else {
        alert("Please Fill Both The Fields.")
    }
}