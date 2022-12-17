import React from 'react';
import '../styles.scss';
import Add from '../img/addAvatar.png';
import { useState } from 'react';
import axios from 'axios';

const url = `${process.env.REACT_APP_BASE_URL}/api/v1/users`;
console.log(url);

export const Signup = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [image, setImage] = useState('');

	const uploadFile = async (file) => {
		await axios
			.post(
				`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
				file
			)
			.then((res) => {
				console.log(res);
				const data = res.data['secure_url'];
				return data;
			});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append(`${email}-img`, image, image.name);
		const imageurl = await uploadFile(formData);
		const params = { name, email, password, imageurl };
		axios
			.post(url, params)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className='formContainer '>
			<div className='formWrapper'>
				<span className='Logo'> Welcome to Rant It Out </span>
				<span className='title'>Sign Up</span>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder='display name'
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
					<input
						type='email'
						placeholder='email'
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					<input
						type='password'
						placeholder='password'
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
					<input
						style={{ display: 'none' }}
						type='file'
						id='file'
						onchange={(e) => {
							return setImage(e.target.files[0]);
						}}
					/>
					<label htmlFor='file'>
						<img src={Add} alt='' />
						<span>Add an Avatar</span>
					</label>
					<button>Sign up</button>
				</form>
				<p> you have an account? Login </p>
			</div>
		</div>
	);
};