import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../common/FormsControls/FormControls.module.css"
import s from "./Login.module.css"



const LoginForm = (props) => {
    return (
        <div className={s.loginForm}>
            <form onSubmit={props.handleSubmit}>
              <div className={s.email}>
                  <Field placeholder={"Email"} name={"email"}
                         validate={[required]}
                         component={Input}/>
              </div>
              <div className={s.pass}>
                  <Field    validate={[required]}
                            component={Input}
                            name={"password"} placeholder={"Password"} type={"password"}/>
              </div>
              <div>
                  <Field component={Input} name={"rememberMe"} type={"checkbox"}/> remember me

              </div>
                {props.captchaUrl && <img src={props.captchaUrl}/>}

                {props.captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}

                {props.error && <div className={style.formSummaryError}>
                    {props.error}
                </div>
                }
              <div>
                  <button class="btn btn-primary" type="submit" value="Submit">Login</button>
              </div>
            </form>
        </div>

    )
}


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)



const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password,formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
            }

        return <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>

}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})


export default connect (mapStateToProps, {login})(Login);