import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import FormField from '../UI/formfields';
import { validate  } from '../UI/misc';
import {firebaseContactDetails } from '../../firebase';
import Button from '../UI/Button';

class Enrol extends Component {
  
        state = {
            formError:false,
            formSuccess:'',
            formdata:{
                email:{
                    element:'input',
                    value:'',
                    config:{
                        name:'email_input',
                        type:'email',
                        placeholder:'Enter your email'
                    },
                    validation:{
                        required:true,
                        email:true
                    },
                    valid:false,
                    validationMessage:''
                },
                freetext:{
                    element:'freetext',
                    value:'',
                    config:{
                        name:'freetext_input',
                        type:'text',
                        placeholder:'Enter your message'
                    },
                    validation:{
                        required:true,
                        email:false
                    },
                    valid:false,
                    validationMessage:''
                },                
            }
          }

    updateForm(element){
            const newFormdata = {...this.state.formdata}
            console.log(newFormdata, "the formdate checked")
            const newElement = {...newFormdata[element.id]}
            newElement.value = element.event.target.value;


//validation
            let valiData = validate(newElement);
            newElement.valid = valiData[0];
           newElement.validationMessage = valiData[1];




            newFormdata[element.id] = newElement;
            this.setState({
                formError:false,
                formdata:newFormdata
            },() => {
           //     console.log(this.state.formdata.email.value);
             //   console.log(this.state.formdata.freetext.value);
            })

    }
    resetFormSuccess = (boolResult) => {
        const newFormdata = {...this.state.formdata}
        for(let key in newFormdata){
            newFormdata[key].value = '';
            newFormdata[key].valid = false;
            newFormdata[key].validationMessage = '';
        }
        this.setState({
            formError:false,
            formdata:newFormdata,
            formSuccess:boolResult ? 'Congratulations details submitted' :
            'Email not available'
        })
        this.clearCongratulations();
    }

    clearCongratulations = () => {
        setTimeout(()=> {
            this.setState({
                formSuccess:''
            })
        },2500);
    }

    

    submitForm(event){
        event.preventDefault();
        let data = {};
        let formIsValid = true;
        //there is only 1 key here email
        for(let key in this.state.formdata){
            data[key] = this.state.formdata[key].value;
            formIsValid = this.state.formdata[key].valid && formIsValid;
        }
       if(formIsValid){
           //data.email is the the email value from above
        firebaseContactDetails.orderByChild('email').equalTo(data.email).once('value')
        .then((snapshot)=> {
            if(snapshot.val() == null){
                firebaseContactDetails.push(data)
                this.resetFormSuccess(true);
            } else
                this.resetFormSuccess(false);

        })
        
        
        
        //this.resetFormSuccess();
        //   console.log(data);
       } else {
           console.log('error');
           this.setState({
               formError:true
           })
           setTimeout(()=> {
            this.setState({
                formError:false
            })
           },2500);
       }

    }

    render() { 

    

        return (
            <Fade>
               <div className="enroll_wrapper">
                   <form onSubmit={ (event) => this.submitForm(event)}>
                        <div className="enroll_title">
                            Enter your Email
                        </div>
                        <div className="enroll_input">
                                <FormField 
                                id={'email'}
                                formdata={this.state.formdata.email}
                                change={(element) => this.updateForm(element)}
                                />
                            </div>
                            <div className="enroll_input">
                                 <FormField 
                                id={'freetext'}
                                formdata={this.state.formdata.freetext}
                                change={(element) => this.updateForm(element)}
                                />
                    {this.state.formError ? <div className="error_label">
                    Ensure added Email in correct Format</div>: null}
                       
                       <div className="success_label">{this.state.formSuccess}</div>

                                <Button id="submit"
                                        value="Submit"
                                        change={(event) => this.submitForm(event)}
                                        height='3.2rem'
                                        width='100%'
                                        borderRadius='.5rem'
                                        border='solid 2px blue'
                                        fontSize='2.5rem'
                                        color='white'
                                        marginLeft='.5rem'
                                        backgroundColor='blue'

                                        >
                                </Button>
                      

                        </div>

                   </form>

                   
                   </div> 
            </Fade>
          );
    }
}
 
export default Enrol;