import React from 'react';

class Component extends React.Component {
	constructor() {
		super();
		this.displayName = 'component';
		this.state = { msg: '請輸入名字：' };
		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleOnClick = this.handleOnClick.bind(this);
	}

	handleOnChange(event) {
		console.log(event.target.value);
		this.inputValue = event.target.value;
	}

	handleOnClick() {
		this.setState({
			msg: `你好！${this.inputValue}先生/小姐！`,
		});
	}

	render() {
		return (
			<div>
				<p>{this.state.msg}</p>
				<input type="text" onChange={this.handleOnChange} />
				<input type="button" value="click" onClick={this.handleOnClick} />
			</div>
		);
	}
}
export default Component;
