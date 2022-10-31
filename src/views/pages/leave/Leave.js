import React, { useEffect, useState } from 'react'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import {
    Typography,
    Form,
    Button,
    Select,
    Upload,
    Input,
    DatePicker,
    Table,
    Space
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { AddLeaveAction, DeleteLeaveAction, FetchLeaveAction } from '../../../redux/actions/leaveAction';
import { useForm } from 'antd/es/form/Form';
const { Text } = Typography

const { RangePicker } = DatePicker;
const { TextArea } = Input

const tailLayout = {
    wrapperCol: { offset: 4, span: 10 },
};

/**
* @author
* @function Leave
**/

export const Leave = (props) => {

    const [form] = useForm()

    const [reasons] = useState(
        [
            {
                key: "Late comming",
                data: "Late comming"
            },
            {
                key: "Leave 2 hours",
                data: "Leave 2 hours"
            },
            {
                key: "Normal leave",
                data: "Normal leave"
            },
            {
                key: "Paid leave",
                data: "Paid leave"
            },
            {
                key: "Work from home",
                data: "Work from home"
            },
        ]
    )

    const columns = [
        {
            title: 'Leave type',
            dataIndex: 'leaveType',
            key: 'leaveType',
        },
        {
            title: 'Reason',
            dataIndex: 'reason',
            key: 'reason',
        },
        {
            title: 'Date range',
            dataIndex: 'dateRange',
            key: 'dateRange',
        },
        {
            title: 'Action',
            key: 'action',
            render: (data) => (
                <Space>
                    <a onClick={() => deleteLeave(data)}><DeleteOutlined /></a>
                </Space>
            ),
        },
    ];

    const dispatch = useDispatch()

    // fetch leave

    useEffect(() => {
        dispatch(FetchLeaveAction())
    }, [])

    const { data, loading } = useSelector((state) => {
        return state.leave.fetchLeave
    })

    // add leave

    const { success, addLeaveloading, message } = useSelector((state) => {
        return state.leave.addLeave
    })

    useEffect(() => {
        if (success) {
            dispatch(FetchLeaveAction())
        }
    }, [success])

    const onFinish = (values) => {
        dispatch(AddLeaveAction(values))
    }

    // delete leave

    const deleteLeave = (data) => {
        console.log(data) 
        dispatch(DeleteLeaveAction(data.id))
    }

    const { deleteSuccess } = useSelector((state) => {
        return state.leave.deleteLeave
    })

    useEffect(() => {
        if(deleteSuccess) {
            dispatch(FetchLeaveAction())
        }
    }, [deleteSuccess])

    return (
        <div>
            <Form
                form={form}
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 10,
                }}
                layout="horizontal"
                onFinish={onFinish}
            >
                <Form.Item name="leaveType" label="Leave type">
                    <Select>
                        {
                            reasons.map((reason) => {
                                return <Select.Option value={reason.key}>{reason.data}</Select.Option>
                            })
                        }
                    </Select>
                </Form.Item>
                <Form.Item name="reason" label="Reason">
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item name="dateRange" label="Date Range">
                    <RangePicker />
                </Form.Item>
                <Form.Item label="Upload" valuePropName="fileList">
                    <Upload action="/upload.do" listType="picture-card">
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <div>
                        <Text type={success ? "success" : "error"} >{message}</Text>
                    </div>
                    <Button type="primary" htmlType="submit" loading={addLeaveloading}>Apply leave</Button>
                </Form.Item>
            </Form>
            <Table columns={columns} dataSource={data} loading={loading}/>
        </div>
    )
}
