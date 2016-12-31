import React, { Component } from 'react';
import Available from './Available';
import BtnMoneyBack from './BtnMoneyBack';


export default class Saldo extends Component {
	render(){
		const {coins, money, addValue, moneyBack, lastPurchased} = this.props;
		const buttons = coins.map((item, i) => { 
			return (
						<button key={i} className="btn btn-info btn-info__l-r-margins" value={item} onClick={addValue}>
							{item < 1 ? `${item*100 }¢` : `$${item}`}
						</button>	
					)
				} 
			)
		return (
			<div className="row text-center p-relative">
			  <h3>Insert coins</h3>
		  	{buttons}
		  	<h3>Available:</h3>
			  <Available money={money} />
			  <BtnMoneyBack money={money} moneyBack={moneyBack} lastPurchased={lastPurchased} />
			</div>
		)
	}
}

Saldo.propTypes = {
  money: React.PropTypes.number,
  moneyBack: React.PropTypes.func,
  lastPurchased: React.PropTypes.string,
  onClick: React.PropTypes.func
}