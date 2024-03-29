import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/homepage/DefaultStructure';
import FoodDeliveryPage from './components/food-delivery/DefaultStructure';
import BlogsPage from './components/blogs/DefaultStructure';
import DealsPage from './components/deals/DefaultStructure';
import InternshipsPage from './components/internships/DefaultStructure';
import VideoLecturesPage from './components/video-lectures/DefaultStructure';
import AboutUsPage from './components/AboutUsPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TestComponent from './components/TestComponent';
import NotFoundPage from './components/NotFoundPage';

import CheckoutPage from './components/food-delivery/CheckoutPage';
import SingleBlogPage from './components/blogs/SingleBlogPage';
import SingleInternshipOpportunityPage from './components/internships/SingleInternshipOpportunityPage';
import SingleVideoLecturePage from './components/video-lectures/SingleVideoLecturePage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.css';
import './assets/styles/main.css';

const jsx = (
	<BrowserRouter>
		<div>
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/food-delivery" component={FoodDeliveryPage} />
                <Route path="/blogs" component={BlogsPage} />

				<Route path="/checkout-page" component={CheckoutPage} />
				<Route path="/single-blog-page" component={SingleBlogPage} />
				<Route path="/single-internship-opportunity-page" component={SingleInternshipOpportunityPage} />
				<Route path="/single-video-lecture-page" component={SingleVideoLecturePage} />

				<Route path="/deals" component={DealsPage} />
				<Route path="/internships" component={InternshipsPage} />
				<Route path="/video-lectures" component={VideoLecturesPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/privacy-policy" component={PrivacyPolicyPage} />
                <Route path="/test" component={TestComponent} />
                <Route component={NotFoundPage} />
			</Switch>
        </div>
	</BrowserRouter>
);

ReactDOM.render(jsx, document.getElementById('app'));
