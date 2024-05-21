import React from "react";

import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";

import Dashboard from "../pages/Dashboard";
import List from "../pages/List";

const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/dashboard" Component={Dashboard}></Route>
        <Route path="/list/:type" Component={List}></Route>
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
