export class HttpResponse {

    constructor(data, errors) {
        this.data = data;
        this.errors = errors;

        console.log('\n');
        console.log('*********************** RESPONSE HTTP ***********************');
        console.log(this);
        console.log('*************************************************************');
        console.log('\n');
    }
}
