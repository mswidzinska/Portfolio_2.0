import React, { FC } from "react";
import { UseWindowSize } from "../../../hooks";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { changeTab } from "../../../features/navigation/navigation-slice";
import {
  StyledMobileNav,
  StyledNavigation,
  StyledNavItem,
} from "./Navigation.sc";
// import { resume } from 'assets/common/resume'

const Navigation = () => {
  const { width } = UseWindowSize();
  const navItems = ["Home", "About", "Projects", "Blog", "Contact"];
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector((state) => state.navigation.activeTab);

  return (
    <>
      {width && width < 700 ? (
        <div>
          <StyledMobileNav>Mobile Nav</StyledMobileNav>
        </div>
      ) : (
        <StyledNavigation>
          {navItems.map((item: string) => (
            <StyledNavItem
              key={item}
              onClick={() => dispatch(changeTab(item))}
              activeTabNav={activeTab === item ? activeTab : ""}
            >
              <p>{item}</p>
            </StyledNavItem>
          ))}
        </StyledNavigation>
      )}
      ;
    </>
  );
};

export default Navigation;
