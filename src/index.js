import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Time = () => (
	<span className="time">3h ago</span>
	);

const ReplyButton = () => (
	<i className="fa fa-reply reply-button"/>
	);

const RetweetButton = () => (
	<i className="fa fa-retweet retweet-button"/>
	);

const LikeButton = () => (
	<i className="fa fa-heart like-button"/>
	);

const MoreOptionsButton = () => (
	<i className="fa fa-ellipsis-h more-options-button"/>
	);


function Avatar()  {
	return(
		<img src="https://www.gravatar.com/avatar/nothing" className="avatar" alt="avatar" />
	)
}

function Message(){
	return(
		<div className="message">
			This is less than 40 charactor
		</div>
	)
}

function NameWithHandle(){
	return(
		<span className="name-with-handle">
			<span className="name">Your Name</span>
			<span className="handle">@yourhandle</span>
		</span>
	);
}


function Tweet() {
	return (
		<div className="tweet">
			<Avatar />
			<div className="content">
				<NameWithHandle />
				<Message />
				<div className="buttons">
					<ReplyButton />
					<RetweetButton />
					<LikeButton />
					<MoreOptionsButton />
				</div>
			</div>
		</div>
	)
}

ReactDOM.render(<Tweet />, document.getElementById('root'));
