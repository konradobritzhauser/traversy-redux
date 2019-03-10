import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/postActions'
import {PropTypes} from 'prop-types'

class Posts extends Component {
  componentWillMount(){
    this.props.fetchPosts()
  }
  renderPosts=()=>{
    return this.props.items.map((elem)=>{
      return <div key={elem.id}>
        <h3>{elem.title}</h3>
        <p>{elem.body}</p>
      </div>
    })
  }
  render() {
    return (
      <div>
{this.renderPosts()}
      </div>
    )
  }
}

Posts.propTypes={
  fetchPosts:PropTypes.func.isRequired,
  items:PropTypes.array.isRequired
}

const mapStateToProps=function(state){
  return {items:state.posts.items}
}

export default connect(mapStateToProps,{fetchPosts})(Posts)
