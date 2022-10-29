import React, { useState, useEffect } from 'react'

import { Layout, Breadcrumb, Menu, message, Dropdown, Space, Tooltip } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';

import './layout.css'
import { Link, Route, Switch, useHistory, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToken } from '../helpers/storage';
import { FetchUserAction } from '../redux/actions/user';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
/**
* @author
* @function DefaultLayout
**/

export const DefaultLayout = ({ routers }) => {

    const dispatch = useDispatch()
    const history = useHistory()
    //logout

    const logout = () => {
        deleteToken()
        window.location.href = "/"
    }

    const goToProfile = () => {
        history.push('/profile')
    }

    const menu = (
        <Menu >
            <Menu.Item key="1" icon={<UserOutlined />} onClick={goToProfile}>
                Profile
            </Menu.Item>
            <Menu.Item key="2" icon={<LogoutOutlined />} onClick={logout}>
                Logout
            </Menu.Item>
        </Menu>
    )

    // fetch username

    const { username } = useSelector((state) => {
        return state.user.fetchUser
    })

    useEffect(() => {
        dispatch(FetchUserAction())
    }, [])



    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header className="header">
                <div className="logo" >
                    <img src="http://ims.data-annotation.ai/images/logoinfi.png" style={{ width: 83, objectFit: 'none' }} />
                </div>
                <Space wrap>
                    <Dropdown.Button overlay={menu} icon={<UserOutlined />}>
                        {username}
                    </Dropdown.Button>
                </Space>
            </Header>
            <Layout>
                <Sider width={175} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        {routers.map(menu => {
                            return menu.children && menu.children.length != 0 ? (
                                <SubMenu key={menu.path} icon={menu.icon} title={menu.title}>
                                    {
                                        menu.children.map(subMenu => {
                                            return !subMenu.hidden && <Menu.Item key={subMenu.path} icon={subMenu.icon}><Link to={subMenu.path}></Link>{subMenu.title}</Menu.Item>
                                        })
                                    }
                                </SubMenu>
                            ) : (
                                !menu.hidden && <Menu.Item key={menu.path} icon={menu.icon}><Link to={menu.path}></Link>{menu.title}</Menu.Item>
                            )
                        })
                        }
                    </Menu>
                </Sider>
                <Layout style={{ color: 'green', height: '100%', padding: '0 24px 24px' }}>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <Switch>
                            {
                                routers.map(router => {
                                    return router.children && router.children.length != 0 ? (
                                        router.children.map(subRouter => {
                                            return <Route exact={router.exact} path={subRouter.path}>
                                                {subRouter.component}
                                            </Route>
                                        })
                                    ) : (
                                        <Route exact={router.exact} path={router.path}>
                                            {router.component}
                                        </Route>
                                    )
                                })
                            }
                            <Route path="/">
                                <Redirect to="/page404" />
                            </Route>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}
