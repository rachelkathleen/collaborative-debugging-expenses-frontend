import React from 'react'
import Account from './Account'
import { Route, Link } from 'react-router-dom';

const Accounts = (props) => {
  console.log(props)

  return (
    <div>
    <h2></h2>
    {props.accounts.map(account =>
      <li key={account.id}>
      <Link to={`/accounts/${account.id}`}> {account.name} </Link>
      </li>)}
    </div>

  )
}

export default Accounts
