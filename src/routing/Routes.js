import React from 'react';
import AdminHeader from '../admin/AdminHeader';
import AdminSidebar from '../admin/AdminSidebar';


const Routes = () => {
  return (
    <section  style={innerStyle}>
      <AdminHeader/>
      <AdminSidebar/>
    </section>
  );
};


const innerStyle = {
    backgroundColor:'#f7f7f7',
    height:'100vh'
}

export default Routes;
