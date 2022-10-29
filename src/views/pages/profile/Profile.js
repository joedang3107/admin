import { Space, Table, Input, Button, Form } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FetchPasswordAction, FetchUserAction } from '../../../redux/actions/user';
import { ChangePasswordAction } from '../../../redux/actions/user';
import { useForm } from 'antd/lib/form/Form';
import Text from 'antd/lib/typography/Text';

/**
* @author
* @function Profile
**/

export const Profile = (props) => {

    const dispatch = useDispatch()
    const [form] = useForm()
    const columns = [
        {
            title: 'Name',
            dataIndex: 'username',
            key: 'username',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Mail',
            key: 'mail',
            dataIndex: 'mail',
        },
        {
            title: 'Gender',
            key: 'gender',
            dataIndex: 'gender',
        },
    ];

    //fetch user

    const { data } = useSelector((state) => {
        return state.user.fetchUser
    })

    useEffect(() => {
        dispatch(FetchUserAction())
    }, [])

    // fetch password

    useEffect(() => {
        dispatch(FetchPasswordAction())
    }, [])

    const { password } = useSelector((state) => {
        return state.user.fetchPassword
    })
    

    // Change password

    const onFinish = (values) => {
        dispatch(ChangePasswordAction(values))
    }

    const { loading, message, success } = useSelector((state) => {
        return state.user.updatePassword
    })

    return (
        <>
            <div>
                <Table columns={columns} dataSource={data} />
                <p>Change Password</p>
                <Form form={form} onFinish={onFinish}>
                    <Space direction="vertical">
                        <Form.Item name="oldpassword" rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            ({
                                validator: (_, value) => {
                                    let check = false
                                    let message = ""
                                    if (value && value == password.currentPassword) {
                                        check = true
                                    }
                                    else {
                                        message = "your entered password is incorrect"
                                    }
                                    return check ? Promise.resolve() : Promise.reject(message)
                                }
                            })
                        ]}>
                            <Input.Password placeholder="input password" />
                        </Form.Item>
                        <Form.Item name="newPassword" rules={[
                            {
                                required: true,
                                message: 'Please input your new password!',
                            }
                        ]}>
                            <Input.Password placeholder="new password" />
                        </Form.Item>
                        <Form.Item name="currentPassword" rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator: (_, value) => {
                                    let check = false
                                    let message = ""
                                    if (value && value == getFieldValue("newPassword")) {
                                        check = true
                                    }
                                    else {
                                        message = "entered password is different from above"
                                    }
                                    return check ? Promise.resolve() : Promise.reject(message)
                                }
                            })

                        ]}>
                            <Input.Password placeholder="confirm password" />
                        </Form.Item>

                    </Space>
                    <Form.Item>
                        <div>
                            <Text type={success ? "success" : "danger"}>{message}</Text>
                        </div>
                        <Button htmlType="submit" type="primary" loading={loading} >Save change</Button>
                    </Form.Item>
                </Form>
            </div>

        </>

    )
}
