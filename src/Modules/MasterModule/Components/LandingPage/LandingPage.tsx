import React from "react";

import TopHeader from "../../../SharedModule/Components/TopHeader/TopHeader";
import MainNavBar from "../../../SharedModule/Components/MainNavBar/MainNavBar";
import HomeSection from "../../../SharedModule/Components/HomeSection/HomeSection";
import CategoriesSection from "../../../SharedModule/Components/CategoriesSection/CategoriesSection";
import Books from "../../../SharedModule/Components/Books/Books";
import FeatureBook from "../../../SharedModule/Components/FeatureBook/FeatureBook";
import OffersSection from "../../../SharedModule/OffersSection/OffersSection";
import SubscribeSection from "../../../SharedModule/Components/SubscribeSection/SubscribeSection";
import Articles from "../../../SharedModule/Components/Articles/Articles";
import Footer from "../../../SharedModule/Components/Footer/Footer";

export default function LandingPage() {
  return (
    <div>
      <TopHeader />
      <MainNavBar />
      <HomeSection />
      <CategoriesSection />
      <Books />
      <FeatureBook />
      <OffersSection />
      <SubscribeSection />
      <Articles />
      <Footer />
    </div>
  );
}
