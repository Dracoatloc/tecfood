const { model } = require('../models/customer');
const customer = require('../models/customer');

 async function blockUser(customerId) {
        await Customer.findByIdAndUpdate(customerId, {canOrder: false}, function() {
            console.log("User Blocked");
        }); 
        return 'User Blocked';
 }
async function getCustomerEmail(email){
    //Holds it in a new variable to return it
    const Email = customer.findOne(email);
    return Email;
    
}

async function getCustomerPassword(password){
    //Holds it in a new variable to return it
    const Password = customer.find(password);
    return Password;
}

async function getCustomerId(customerId){
    //Holds it in a new variable to return it
    const idc = customer.findById(customerId);
    return idc;

}

async function addCustomer(name, lastName, email, password){
    //Holds it in a new variable to return it
    const newCustomer = new customer({
        name: name,
        email: email,
        password: password
    });
    const saved = await customer.save();
    return 'You have created an account';
}

 async function getEmail(customerId) {
        const customer = await Customer.findById(customerId);
        const email = customer.email;

        return email;
 }

model.exports ={
    getCustomerEmail,
    getCustomerPassword,
    getCustomerId,
    addCustomer,
    blockUser,
    getEmail

}
