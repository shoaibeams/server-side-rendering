import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'

class UsersListPage extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  renderList() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    })
  }

  render() {
    return (
      <div>
        <h3>Users List!</h3>
        <ul>{this.renderList()}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users || []
  }
}

const loadData = store => {
  return store.dispatch(fetchUsers())
}

export default {
  loadData,
  component: connect(
    mapStateToProps,
    { fetchUsers }
  )(UsersListPage)
}
