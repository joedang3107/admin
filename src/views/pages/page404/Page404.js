import React from 'react'
import { Button, Result } from 'antd';
import { useHistory } from 'react-router';

/**
* @author
* @function Page404
**/

export const Page404 = (props) => {
    
    const history = useHistory()

    const backToDashboard = () => {
        history.push('/dashboard')
    }
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button onClick={backToDashboard} type="primary">Back Home</Button>}
        />
    );
}
