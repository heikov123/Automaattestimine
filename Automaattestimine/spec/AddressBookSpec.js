// defineerime
describe('Address Book', function () {
    var addressBook,
    thisContact;

// Kutsume aadressiraamatu ja kontakti objektid välja
beforeEach(function() {
    addressBook = new AddressBook();
    thisContact = new Contact();
});


    it('should be able to contact', function () {
    // Lisan meetodi millega kontakte aadressraamatusse lisada    
        addressBook.addContact(thisContact);

        // eeldan, et päringu peale tagastatakse mulle lisatud kontakt
        expect(addressBook.getContact(0)).toBe(thisContact);
    });

    // lisan uue kirjelduse kontakti kustutamiseks
    it('should be able to delete a contact', function() {
        

        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);

        //lisan meetodi, millega lisatud kontakti kustutada saan
        expect(addressBook.getContact(0)).not.toBeDefined();
    });
});
//lisan uue kirje asünkroonseks kontakti lisamiseks
describe('Async Address Book', function() {
    it('should grab initial contacts', function() {
        var addressBook = new AddressBook();

        //lisan funktsiooni, millega iga funktsiooni eel on päring märgitud lõpetatuks
        beforeEach(function(done) {
            //lisan meetodi, millega kontakte asünkroonselt lisada saan
            addressBook.getInitialContacts(function() {
                //kutsun välja done funktsiooni, mis annab meie funktsioonile teada, et asünkroonne päring on lõpetatud
                done();
            });
        });

        it('should grab inital contacts', function(done) {
            //eeldan, et kontaktide lisamine õnnestus
            expect(addressBook.initialComplete).toBe(true);
            done();
        });
    });
});  