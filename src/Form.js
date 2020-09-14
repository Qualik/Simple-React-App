import React, { Component } from 'react'
// import { render } from 'react-dom'

class Form extends Component {
    initialState = {
        name: '',
        job: '',
    }

    state = this.initialState


    handleChange = (Event) => {
        const { name, value } = Event.target

        this.setState({
            [name]: value,
        })
    }

    render() {
        const { name, job } = this.state;

        return (
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} />
                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange} />
                    <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }

    submitForm = () => { //Simple Component 
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

}

export default Form;

//App Component
//Custom Class Component with Simple Component