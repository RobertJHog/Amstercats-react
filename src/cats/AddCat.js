import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import CatsEditor from '../cats/CatsEditor'
import '../cats/AddCat.sass'

export class CatProfile extends PureComponent {
  static propTypes = {}

  render() {
    const {  } = this.props

    return(
      <div className="addcat-wrapper">
        <h1> Add a AmsterCat profile  </h1>
        <img src="http://res.cloudinary.com/daahasvbo/image/upload/v1493973082/wally-editor_avmbfv.jpg"/>
        <div className="profile-editor">
          <h2> Add a new cat profile!</h2>
          < CatsEditor />
        </div>
      </div>
    )
  }
}

export default CatProfile
