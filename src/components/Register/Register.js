import React from "react";


class Register extends React.Component {
    constructor () {
        super();
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }
    
    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onSubmitLogIn = () => {
        fetch('http://localhost:3000/register/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name,
            })
        })
            .then(response => response.json())
            .then(user => {
                if(user.id) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home');
                }
            })
    }

    render() {
        const { onRouteChange } = this.props;
        return (
            <article className="mw6 center bg-white br3 pa3 pa4-ns mv4 ba b--black-10 shadow-5">
                <div className="measure">
                    <fieldset id="register" className="ba b--transparent ph0 mh0">
                    <h1 className="f1">Register</h1>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input 
                        className="pa2 input-reset ba bg-transparent  w-100" 
                        type="text"
                        onChange={this.onNameChange}
                        />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input 
                        className="pa2 input-reset ba bg-transparent  w-100" 
                        type="email" 
                        name="email-address"  
                        id="email-address"
                        onChange={this.onEmailChange}
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input 
                        className="b pa2 input-reset ba bg-transparent  w-100" 
                        type="password" 
                        name="password"  
                        id="password"
                        onChange={this.onPasswordChange}
                        />
                    </div>
                    </fieldset>
                    <div>
                    <input 
                    onClick={this.onSubmitLogIn}
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="Register"
                    />
                    </div>
                    <div className="lh-copy mt3">
                    <p>Already have an account?</p>
                    <p onClick={() => onRouteChange('login')} className="f6 link dim black db pointer">Login</p>
                    </div>
                </div>  
        </article>
        );
    }
}

export default Register;