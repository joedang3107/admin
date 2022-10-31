import React, { useEffect } from 'react'
import { Card, Form, Input, Button, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from "react-router"
import * as type from '../../../redux/const/index'


import './login.css'
import store from '../../../redux/store';
import { LoginAction } from '../../../redux/actions/authen';
import { connect } from 'react-redux';
import { setAxiosToken } from '../../../apis';

const { Text } = Typography;

/**
* @author
* @function LoginPage
**/

const LoginPage = ({ isLoggedIn, message, isSubmitting }) => {

    let history = useHistory()

    useEffect(() => {
        if (isLoggedIn) {
            setAxiosToken()
            history.push('/dashboard')
        }
    }, [isLoggedIn])

    // let [isSubmitting, setIsSubmitting] = useState(false)

    // store.subscribe(() => {
    //     let state = store.getState()
    //     setIsSubmitting(state.auth.submitting)
    // })

    const onFinish = (data) => {
        console.log('Received values of form: ', data);

        store.dispatch({ type: type.USER_LOGIN, payload: data })
    };


    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        // validate failed
    };

    return (
        <div className="login-container">
            <Card size="small" title="Login" extra={<a href="#">More</a>} style={{ width: 400 }}>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            }
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <div>
                            <Text type="danger">{message}</Text>
                        </div>
                        <Button type="primary" htmlType="submit" className="login-form-button" loading={isSubmitting}>
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>

    )
}


function mapStateToProps(state) {
    return {
        isSubmitting: state.auth.submitting,
        message: state.auth.message,
        isLoggedIn: state.auth.isLoggedIn
    }
}
function mapDispatchToProps(dispatch) {
    return {
        login: (data) => { dispatch(LoginAction(data)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)