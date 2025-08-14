const asyncHandler=(requestHandler)=>{
    //this three thing are using in the handler next-->middle part of res and req

    return(req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch(next);
    }
}

export{asyncHandler}