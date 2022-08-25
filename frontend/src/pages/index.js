import React from 'react'
import {Switch, Route} from 'react-router-dom'
import ActivationEmail from '../components/body/auth/ActivationEmail'
import Login from '../components/body/auth/Login'
import Register from '../components/body/auth/Register'
import CartPage from './CartPage/CartPage'
import GuestPage from './GuestPage'
import HomePage from './HomePage'
import ManagePage from './ManagePage/ManagePage'
import OrderDetailPage from './OrderDetailPage/OrderDetailPage'
import ProductDetailPage from './ProductDetailPage'
import SettingPage from './SettingPage/SettingPage'
import ViewProductsPage from './ViewProductsPage/ViewProductsPage'



const Pages = () => {
  return (
    <section>
       <Switch>
             <Route path="/" component={GuestPage} exact/>
             <Route path="/home" component={HomePage} exact/>
             <Route path="/login" component={Login} exact />
             <Route path="/register" component={Register} exact/>
             <Route path="/auth/activate/:activation_token" component={ActivationEmail} exact />
             <Route path="/productdetail" component={ProductDetailPage} exact />
             <Route path="/cart" component={CartPage} exact />
             <Route path="/orderdetail" component={OrderDetailPage} exact />
             <Route path="/setting" component={SettingPage} exact />
             {/* <Route href="/products" component={ViewProductsPage} exact /> */}
             <Route href="/manageaccount" component={ManagePage} exact />
       </Switch>
    </section>
  )
}

export default Pages