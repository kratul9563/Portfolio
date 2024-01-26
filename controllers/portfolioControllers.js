const sendEmailController = (res,req) => {

    try {
        return res.status(200).send({
            success:true,
            message:'Your Message Send Successfully',
            error
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:'Send Email API Error',
            error
        })
    }
};

module.exports = {sendEmailController};