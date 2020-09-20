import React from 'react';

class Component extends React.Component {
	constructor() {
		super();
		this.displayName = 'component';
		this.checkValue = false;
		this.radioValue = '(未選取)';
		this.state = { msg: '' };
		this.handleOnChangeCb = (event) => {
			this.checkValue = event.target.checked;
		};
		this.handleOnChangeRb = (event) => {
			this.radioValue = event.target.value;
		};
		this.handleOnClick = () => {
			this.setState({
				msg: `選取狀態：${this.checkValue}, ${this.radioValue}`,
			});
		};
	}

	render() {
		const { msg } = this.state;
		return (
			<div>
				<p>{msg}</p>
				<div>
					<label htmlFor="ck1">
						Check Box
						<input type="checkbox" onChange={this.handleOnChangeCb} id="ck1" />
					</label>
				</div>
				<div>
					<label htmlFor="r1">
						Radio A
						<input type="radio" onChange={this.handleOnChangeRb} value="A" id="r1" name="radio" />
					</label>
				</div>
				<div>
					<label htmlFor="r2">
						Radio B
						<input type="radio" onChange={this.handleOnChangeRb} value="B" id="r2" name="radio" />
					</label>
				</div>
				<div>
					<input type="button" value="click" onClick={this.handleOnClick} />
				</div>
			</div>
		);
	}
}
export default Component;
