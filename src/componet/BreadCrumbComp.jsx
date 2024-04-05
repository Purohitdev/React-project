

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import '../Home.css';

function BreadCrumbComp({title,crumb}) {
  return (
    <div className="intro-main">
        <div className="into-detail">

    <h1>{title}</h1>

      <Breadcrumb>
      <Breadcrumb.Item href="#">
        <Link to="/" className='remove'>Home </Link>
        </Breadcrumb.Item>
      
      <Breadcrumb.Item  active>{crumb}</Breadcrumb.Item>
    </Breadcrumb>


    </div>
    </div>
    
  );
}

export default BreadCrumbComp;