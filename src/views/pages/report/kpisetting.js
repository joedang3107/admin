import React, { useEffect, useState } from 'react'
import { Table, Tag, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { fetchKpiAction } from '../../../redux/actions/kpi'
/**
* @author
* @function Report
**/


const columns = [
  {
    title: 'NO',
    dataIndex: 'no',
    key: 'no',
    render: text => <a>{text}</a>,

  },
  {
    title: 'FROM',
    dataIndex: 'from',
    key: 'from',
  },
  {
    title: 'TO',
    dataIndex: 'to',
    key: 'to',
  },
  {
    title: 'KPI SALARY',
    dataIndex: 'kpiSalary',
    key: 'kpiSalary',
  },
  {
    title: 'CONDITIONS',
    dataIndex: 'conditions',
    key: 'conditions',
  },
];

export const Report = (props) => {

  let dispatch = useDispatch()

  const { data } = useSelector(state => {
    return state.kpi.kpi
  })
  useEffect(() => {
    dispatch(fetchKpiAction())
  }, [])

  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>

  )
}
