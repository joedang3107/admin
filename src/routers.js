import { Dashboard } from "./views/pages/dashboard/Dashboard";
import { Projects } from "./views/pages/project-pages/projects/Projects";
import { ProjectOutlined, DashboardFilled, OrderedListOutlined, ScheduleOutlined, FileTextOutlined, DatabaseOutlined  } from '@ant-design/icons'
import { PfmPage1 } from "./views/pages/pfm-page/pfmPage1";
import { PfmPage2 } from "./views/pages/pfm-page/pfmPage2";
import { PfmPage3 } from "./views/pages/pfm-page/pfmPage3";
import { PfmPage4 } from "./views/pages/pfm-page/pfmPage4";
import { Report } from "./views/pages/report/kpisetting";
import { EditPage1 } from "./views/pages/edit/EditPage1";
import { EditPage2 } from "./views/pages/edit/EditPage2";
import { EditPage3 } from "./views/pages/edit/EditPage3";
import { EditPage4 } from "./views/pages/edit/EditPage4";
import { Profile } from "./views/pages/profile/Profile";
import { EmployeeSchedule } from "./views/pages/employeeschedule/EmpSchedule";

const routers = [
    {
        path: '/dashboard',
        title: "Dashboard",
        icon: <DashboardFilled />,
        component: <Dashboard />,
        children: [],
        exact: true
    },
    {
        path: '/projects',
        title: "Projects",
        icon: <ProjectOutlined />,
        component: '',
        children: [
            {
                path: '/project/list',
                title: "PROJECT LIST",
                icon: <OrderedListOutlined />,
                component: <Projects />,
                children: [],
            },
            {
                path: '/empschedule',
                title: "EMP SCHEDULE",
                icon: <ScheduleOutlined />,
                component: <EmployeeSchedule />,
                children: [],
            },
            {
                path: '/project/performance/1',
                title: "PFM MANAGEMENT",
                icon: <OrderedListOutlined />,
                component: <PfmPage1 />,
                children: [],
                hidden: true
            },
            {
                path: '/project/performance/2',
                title: "PFM MANAGEMENT",
                icon: <OrderedListOutlined />,
                component: <PfmPage2 />,
                children: [],
                hidden: true
            },
            {
                path: '/project/performance/3',
                title: "PFM MANAGEMENT",
                icon: <OrderedListOutlined />,
                component: <PfmPage3 />,
                children: [],
                hidden: true
            },
            {
                path: '/project/performance/4',
                title: "PFM MANAGEMENT",
                icon: <OrderedListOutlined />,
                component: <PfmPage4 />,
                children: [],
                hidden: true
            },
            {
                path: '/project/edit1/:id',
                title: "PFM MANAGEMENT",
                icon: <OrderedListOutlined />,
                component: <EditPage1 />,
                children: [],
                hidden: true
            },
            {
                path: '/project/edit2/:id',
                title: "PFM MANAGEMENT",
                icon: <OrderedListOutlined />,
                component: <EditPage2 />,
                children: [],
                hidden: true
            },
            {
                path: '/project/edit3/:id',
                title: "PFM MANAGEMENT",
                icon: <OrderedListOutlined />,
                component: <EditPage3 />,
                children: [],
                hidden: true
            },
            {
                path: '/project/edit4/:id',
                title: "PFM MANAGEMENT",
                icon: <OrderedListOutlined />,
                component: <EditPage4 />,
                children: [],
                hidden: true
            },
        ],
    },
    {
        path: '/report',
        title: "REPORT",
        icon: <FileTextOutlined />,
        component: '',
        children: [
            { 
                path: '/kpi/kpiSetting',
                title: "KPI SETTING",
                icon: <DatabaseOutlined />,
                component: <Report />,
                children: [],
            },
        ],
    },
    {
        path: '/profile',
        component: <Profile/>,
        children: [],
        hidden: true
    }
]

export default routers;