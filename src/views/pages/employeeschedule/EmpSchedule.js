import { Badge, Calendar } from 'antd'
import React from 'react'

import './style.css'
/**
* @author
* @function EmployeeSchedule
**/

export const EmployeeSchedule = (props) => {

    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode)
    }

    const getListData = (value) => {
        let listData
        switch (value.date()) {
            case 30:
                listData = [
                    {
                        type: 'success',
                        content: 'Birthday party day',
                    },
                ]
                break
            default:
                break;
        }
        return listData || [];
    }
    const getMonthData = (value) => {
        let monthData
        switch (value.month()) {
            case 0:
                monthData = [
                    {
                        type: 'success',
                        content: 'New Year – January 1'
                    }
                ]
                break;
            case 4:
                monthData = [
                    {
                        type: 'success',
                        content: "International Workers’ Day - May 1"
                    },
                    {
                        type: 'success',
                        content: 'Dien Bien Phu Victory Day – May 7'
                    }
                ]
                break;
            case 6:
                monthData = [
                    {
                        type: 'success',
                        content: "Birthday - July 31"
                    },
                    {
                        type: 'success',
                        content: 'Remembrance Day – July 27'
                    }
                ]
                break;
            case 8:
                monthData = [
                    {
                        type: 'success',
                        content: "Independence day holiday - September 2"
                    }
                ]
                break;
            case 9:
                monthData = [
                    {
                        type: 'success',
                        content: "Capital Liberation Day – October 10"
                    },
                    {
                        type: 'success',
                        content: "Vietnamese Women’s Day – October 20"
                    }
                ]
                break;
            default:
                break;
        }
        return monthData || []
    }

    const monthCellRender = (value) => {
        const monthData = getMonthData(value);
        return (
            <ul className="events">
                {monthData.map((item) => (
                    <li>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        )
    }

    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <div>
            <Calendar onPanelChange={onPanelChange} dateCellRender={dateCellRender} monthCellRender={monthCellRender}/>
        </div>
    )
}
