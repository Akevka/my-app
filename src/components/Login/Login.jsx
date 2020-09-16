import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControls/FormControls.module.css"




const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
              <div>
                  <Field placeholder={"Email"} name={"email"}
                         validate={[required]}
                         component={Input}/>
              </div>
              <div>
                  <Field    validate={[required]}
                            component={Input}
                            name={"password"} placeholder={"Password"} type={"password"}/>
              </div>
              <div>
                  <Field component={Input} name={"rememberMe"} type={"checkbox"}/> remember me
              </div>
                {props.error && <div className={style.formSummaryError}>
                    {props.error}
                </div>
                }
              <div>
                  <button>Login</button>
              </div>
            </form>
        </div>

    )
}


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)



const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password,formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
            }

        return <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect (mapStateToProps, {login})(Login);