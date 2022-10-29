
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Input, Typography, Form, Button, Select, DatePicker, Space } from 'antd';
import { useForm } from 'antd/es/form/Form';

import './style.css'
import { AddPfm4Action } from '../../../redux/actions/page4Action';
import { FetchUserAction } from '../../../redux/actions/user';
import { DeletePfm4Action } from '../../../redux/actions/page4Action';
import { useHistory } from 'react-router';
import { FetchPfms4Action } from '../../../redux/actions/page4Action';

const { Text } = Typography

const tailLayout = {
    wrapperCol: { offset: 10, span: 8 },
};
/**
* @author
* @function PfmPage4
**/

export const PfmPage4 = () => {

    const [pageSize, setPageSize] = useState(6)
    const [current, setCurrent] = useState(1)
    const [form] = useForm();
    const [roles, setRole] = useState([
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
    const [columns] = useState([
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'Start Time',
            dataIndex: 'startTime',
            key: 'startTime',
        },
        {
            title: 'End Time',
            dataIndex: 'endTime',
            key: 'endTime',
        },
        {
            title: 'Pfm',
            key: 'pfm',
            dataIndex: 'pfm'
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (data) => (
                <Space size="middle">
                    <a onClick={() => editAction(data)}>Edit</a>
                    <a onClick={() => deleteAction(data)}>Delete</a>
                </Space>
            )
        }
    ])

    const dispatch = useDispatch()
    const history = useHistory()

    // edit pfm

    const editAction = (data) => {
        const { id } = data
        history.push(`/project/edit4/${id}`)
    }

    // delete pfm

    const deleteAction = (data) => {
        console.log(data);
        dispatch(DeletePfm4Action(data.id))
    }

    const { deleteSuccess } = useSelector((state) => {
        return state.pfm4.deletePfm4
    })

    useEffect(() => {
        if (deleteSuccess) {
            setCurrent(1)
            dispatch(FetchPfms4Action({ _page: 1, _limit: pageSize }))
        }
    }, [deleteSuccess])


    // fetch pfm
    const { loading, data, total } = useSelector((state) => {
        return state.pfm4.fetchPfm4
    })

    useEffect(() => {
        dispatch(FetchPfms4Action({ _page: current, _limit: pageSize }))
    }, [current, pageSize])


    // add pfm
    const { addPfmLoading, success, message } = useSelector((state) => {
        return state.pfm4.addPfm4
    })

    useEffect(() => {
        if (success) {
            dispatch(FetchPfms4Action({ _page: current, _limit: pageSize }))
        }
    }, [success])

    // fetch username

    const { username } = useSelector((state) => {
        return state.user.fetchUser
    })

    useEffect(() => {
        dispatch(FetchUserAction())
    }, [])

    // khi submit form thì thực thi add pfm
    const onFinish = (values) => {
        dispatch(AddPfm4Action(values))
    };

    // reset field
    const onReset = () => {
        form.resetFields();
    };

    const onPageChange = (value) => {
        setCurrent(value)
    }
    return (
        <>
            <h2>Daily performance 4</h2>
            <div>
                <Form form={form} onFinish={onFinish} title="Basic Modal" width={1000} labelCol={{ span: 8 }}
                    wrapperCol={{ span: 6 }}
                    layout="horizontal">
                    <Form.Item name="date" label="Date" rules={[{ required: true }]}>
                        <DatePicker />
                    </Form.Item>
                    <Form.Item name="name" label="Name" rules={[{ required: true }]} initialValue={username}>
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
                    <Form.Item name="startTime" label="Start Time" rules={[{ required: true }]} initialValue="08:00">
                        <Input />
                    </Form.Item>
                    <Form.Item name="endTime" label="End Time" rules={[{ required: true }]} initialValue="17:00">
                        <Input />
                    </Form.Item>
                    <Form.Item name="pfm" label="Performance" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Text type={success ? "success" : "danger"}>{message}</Text>
                        <div>
                            <Button type="primary" htmlType="submit" loading={addPfmLoading} >
                                Add pfm
                            </Button>
                            <Button htmlType="button" onClick={onReset}>
                                Reset
                            </Button>
                        </div>
                    </Form.Item>
                    <Table className="table"
                        columns={columns}
                        dataSource={data}
                        loading={loading}
                        pagination={{
                            pageSize,
                            current,
                            onChange: onPageChange,
                            total
                        }}
                    />
                </Form>
            </div>
        </>
    )
}
