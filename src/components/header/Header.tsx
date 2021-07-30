import '../../css/header/header.css';
import '../../css/header/index.css';
import React from 'react';
import {LeftSideHeader} from './LeftSideHeader';
import {CenterSideHeader} from './CenterSideHeader';
import {RightSideHeader} from './RightSideHeader';

export function Header() {
    return (
        <header>
            <div id="logoAndSearch" className="alignItemsHeader">
                <LeftSideHeader />
            </div>

            <div id="buttonsPage" className="alignItemsHeader">
                <CenterSideHeader />
            </div>

            <div id="buttonsProfile" className="alignItemsHeader">
                <RightSideHeader />
            </div>
        </header>
    );
}