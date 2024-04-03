import express from 'express';
import {Contact} from "../models/contact.model.js";

const router = express.Router();

const contacts = [
    new Contact(1, 'Doe', 'John', '0680808080'),
    new Contact(2, 'Smith', 'Jane', '0670707070'),
    new Contact(3, 'Johnson', 'Michael', '0690909090')
];


router.get('/', function (req, res, next) {
    res.render('contacts', {contactList: contacts});
});

router.get('/add', (req, res, next) => {
    res.render('contact-add');
});

router.post('/add', (req, resp, next) => {
    const {lastname, firstname, phoneNumber} = req.body;
    const idGenerated = contacts.length + 1;
    const newContact = new Contact(idGenerated, lastname, firstname, phoneNumber);
    contacts.push(newContact);

    resp.redirect('/contacts');
});


export default router;
