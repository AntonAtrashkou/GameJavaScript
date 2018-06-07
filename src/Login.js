import './styles/login.css';

export default class Login {
    constructor(forward) {

        this.firstName = '';
        this.lastName = '';
        this.email = '';
        
        this.contionueButton = document.getElementById('continue');
        this.contionueEvent = this.contionueButton.addEventListener('click', () => {
            this.checkInputs(forward);
        });
        
        this.firstNameInput = document.getElementById('firstName');
        this.lastNameInput = document.getElementById('lastName');
        this.emailInput = document.getElementById('email');
        
        this.firstNameInputEvent = this.firstNameInput.addEventListener('change', (e) => {
            this.firstName = e.target.value;
        });
        this.lastNameInputEvent = this.lastNameInput.addEventListener('change', (e) => {
            this.lastName = e.target.value;
        });
        this.emailInputEvent = this.emailInput.addEventListener('change', (e) => {
            this.email = e.target.value;
        });
    }
    
    checkInputs(forward) {
        if (this.firstName && this.lastName && this.email) {
            forward({
                firstName: this.firstName, 
                lastName: this.lastName, 
                email: this.email,
                preload: true,
            } );
        } else {
            console.log('name or email is empty');
        }
    }
}