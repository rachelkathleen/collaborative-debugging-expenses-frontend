import React from 'react'
import {Route, Link, Redirect } from 'react-router-dom';
import TransactionContainer from '../containers/TransactionContainer'

const Account = (props) => {


  let account = props.accounts.find(a => a.id == props.match.params.id)

  const renderAccount = () => {
    if (account ) {
      return (
        <div>
          <h1>{account.name}</h1>
          <p>Total Balance: ${account.balance}</p>
        </div>
      )
    } else {
        return null
    }
  }


  return (

    <div>
      {props.match.isExact && renderAccount()}
      <TransactionContainer account={account} history={props.history} urlMatch={props.match}/>
    </div>

  )
}

export default Account
