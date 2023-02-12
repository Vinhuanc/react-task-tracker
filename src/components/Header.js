import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import {useLocation} from 'react-router-dom'
// rafce for auto template
const Header = ({title, onAdd, showAdd}) => {
  const location = useLocation()
  return (
    <header class='header'>
       <h1>
      {title}
    </h1>
    {location.pathname==='/' && (<Button color={showAdd ? 'red':'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>)}
    
    </header>
   
  )
}

Header.defaultProps = {
  title: 'Task Manager',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}
// calling it: <h1> style={headingStyle}>  </h1>
// const headingStyle = {
//   color:'red', backgroundColor:'black'
// }
export default Header
