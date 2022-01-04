// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { logOut } from "../../reducers/login";
// import { useDispatch } from "react-redux";
// import "antd/dist/antd.css";
// import "./style.css";
// import { Layout, Menu } from "antd";
// import {
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   UserOutlined,
//   ProfileOutlined,
//   AppstoreAddOutlined,
//   HeartOutlined,
//   LoginOutlined,
//   LogoutOutlined,
// } from "@ant-design/icons";

// const { Header, Sider } = Layout;

// ////////////////////////////////////////////////////////////////////////////////////////////

// const SideBar = () => {
//   let navigate = useNavigate();
//   const [collapsed, setCollapsed] = useState(false);
//   const state = useSelector((state) => {
//     return state;
//   });

//   const toggle = () => {
//     setCollapsed(!collapsed);
//   };

//   const logout = () => {
//     const data = {
//       role: "",
//       token: "",
//       userID: "",
//     };
//     dispatchEvent(logOut(data));
//     navigate(`/Home`);
//   };

//   const goToProfile = () => {
//     navigate(`/Profile`);
//   };

//   ////////////////////////////////////////////////////////////////////////////////////////////

//   return (
//     <Layout>
//       <Sider trigger={null} collapsible collapsed={collapsed}>
//         <div className="logo" />
//         <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
//           {state.signIn.role === "61c42c3139940ec8e18224d0" && (
//             <Menu.Item onClick={goToProfile} key="1" icon={<UserOutlined />}>
//               Profile
//             </Menu.Item>
//           )}
//           {state.signIn.role === "61c42c3139940ec8e18224d0" && (
//             <Menu.Item key="1" icon={<HeartOutlined />}>
//               Wish List
//             </Menu.Item>
//           )}
//           {state.signIn.role === "61c4248139940ec8e18224cc" && (
//             <Menu.Item key="2" icon={<ProfileOutlined />}>
//               Dashbord
//             </Menu.Item>
//           )}
//           {state.signIn.role === "61c4248139940ec8e18224cc" && (
//             <Menu.Item key="3" icon={<AppstoreAddOutlined />}>
//               New Product
//             </Menu.Item>
//           )}

//           {state.signIn.role === "61c4248139940ec8e18224cc" && (
//             <Menu.Item key="3" icon={<AppstoreAddOutlined />}>
//               New Product
//             </Menu.Item>
//           )}

//           {state.signIn.token.length == 0 ? (
//             <Menu.Item key="3" icon={<LoginOutlined />}>
//               SingUp
//             </Menu.Item>
//           ) : (
//             <Menu.Item onClick={logout} key="3" icon={<LogoutOutlined />}>
//               {" "}
//               log Out
//             </Menu.Item>
//           )}
//         </Menu>
//       </Sider>

//       <Layout className="site-layout">
//         <Header className="site-layout-background" style={{ padding: 0 }}>
//           {React.createElement(
//             collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
//             {
//               className: "trigger",
//               onClick: toggle,
//             }
//           )}
//         </Header>
//       </Layout>
//     </Layout>
//   );
// };

// export default SideBar;
