function catchBlock(error, errorMessage, res){
    let error_message;
    try {
        if(error.response){
            if(error.response.data){
                error_message = error.response.data
                console.log(errorMessage, error.response.data);
            }
            else{
                error_message = error.response
                console.log(errorMessage, error.response);
            }
        }else{
            error_message = error
            console.log(errorMessage,error);
        }
    } catch (error) {
        error_message = error
        console.log(errorMessage,error);
    }
    if(res) return res.status(403).json(error_message);
    console.log(error_message)
}

module.exports = catchBlock;