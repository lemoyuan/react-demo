import React from 'react';
// import { Icon  } from 'antd';
import { Route } from "react-router-dom";
// 渲染当前组件
// 比如这个路由数组
// const routes = [
//     { path: '/login', name: '登录', component: Login },
//     {
//         path: '/', exact: true, name: '首页', component: Index,
//         routes: [
//             { path: '/a', name: 'a', component: PageA },
//             { path: '/b', name: 'b', component: PageB }
//         ]
//     }
// ]
// 循环渲染当前路由数组中一维数组中的组件
export const RenderRoutes = ({ routes }) => { return (routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)) };
// 也就是说， 这里只渲染这个数组的一唯数组， routes下面的routes数组是不会继续渲染的
export const RouteWithSubRoutes = route => (
    <Route
        path={route.path}
        exact={route.exact}
        render={props => {
            return (
                <route.component {...props} routes={route.routes} />
            )
        }}
    />
);