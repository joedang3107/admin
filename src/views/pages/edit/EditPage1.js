import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Input, Form, Button, Select, DatePicker, Typography } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { EditPfm1Action, FetchPfm1Action } from '../../../redux/actions/page1Action';
import { useParams } from 'react-router-dom';

const { Text } = Typography

const tailLayout = {
    wrapperCol: { offset: 10, span: 8 },
};

/**
* @author
* @function EditPage1
**/

export const EditPage1 = (props) => {


    const [form] = useForm()
    const [isFirstTime, setIsFirstTime] = useState(true)
    const [roles] = useState([
        {
            dataIndex: 'Annotator',
            key: 'Annotator',
        },
        {
            dataIndex: 'Modify',
            key: 'Modify',
        },
        {
            dataIndex: 'QA',
            key: 'QA',
        }
    ])
    

    const params = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        if (params.id) {
            dispatch(FetchPfm1Action(params.id))
        }
    }, [])

    const pfm = useSelector((state) => {
        let { pfm } = state.pfm1
        if (pfm.success && isFirstTime) {
            form.setFieldsValue({
                id: pfm.data.id,
                name: pfm.data.name,
                role: pfm.data.role,
                startTime: pfm.data.startTime,
                endTime: pfm.data.endTime,
                pfm: pfm.data.pfm
            })
            setIsFirstTime(false)
        }
        return pfm
    })

    const onFinish = (values) => {
        dispatch(EditPfm1Action(values))
    };

    const { message, editSuccess, editPfmLoading } = useSelector((state) => {
        return state.pfm1.editPfm1
    })

    const onReset = () => {
        form.resetFields();
    };

    return (
        <div>
            <Form form={form} onFinish={onFinish} title="Basic Modal" width={1000} labelCol={{ span: 8 }}
                wrapperCol={{ span: 6 }}
                layout="horizontal">
                <Form.Item name="id" hidden>
                    <Input />
                </Form.Item>
                <Form.Item name="date" label="Date" rules={[{ required: true }]}>
                    <DatePicker />
                </Form.Item>
                <Form.Item name="name" label="Name" rules={[{ required: true }]} >
                    <Input />
                </Form.Item>
                <Form.Item name="role" label="Role" rules={[{ required: true }]}>
                    <Select>
                        {
                            roles.map((role) => {
                                return <Select.Option value={role.key}>{role.dataIndex}</Select.Option>
                            })
                        }
                    </Select>
                </Form.Item>
                <Form.Item name="startTime" label="Start Time" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="endTime" label="End Time" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="pfm" label="Performance" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Text type={editSuccess ? "success" : "danger"} >{message}</Text>
                    <div>
                        <Button type="primary" htmlType="submit" loading={editPfmLoading}>
                            Edit pfm
                        </Button>
                        <Button htmlType="button" onClick={onReset}>
                            Reset
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}
