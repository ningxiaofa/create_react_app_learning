import React from 'react';
import './not-found.less';

import FootNav from '../../components/foot-nav/foot-nav';


export default function NotFound (){
    return (
        <div className="notFoundContainer">
            404... the page is gone.
            <div className="subContainer">
                404 subcontainer
            </div>

            <FootNav />
        </div>
    )
}
