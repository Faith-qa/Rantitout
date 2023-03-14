import React from 'react';
import '../styles.scss';
//import Add from '../img/addAvatar.png';
import { useState } from 'react';
//import axios from 'axios';
import { useNavigate} from 'react-router-dom'
import { useSignup } from '../hooks/useSignup';
//import { useUpload } from '../hooks/useFileUpload';


export const Signup = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	//const [file, setFile] = useState(null)

	const navigate = useNavigate()



	const {signup,  isLoading} = useSignup()
	//const {handleFile, imageUrl} = useUpload()
	//const [image, setImage] = useState('');

	// const uploadFile = async (file) => {

		

	// 	await axios
	// 		.post(
	// 			`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
	// 			file
	// 		)
	// 		.then((res) => {
	// 			console.log("hello", res);
	// 			const data = res.data['secure_url'];
	// 			return data;
	// 		});
	// };

	const handleSubmit = async(e) =>{
		e.preventDefault()
		// const selectedFile = e.target.files[0]
		// setFile(selectedFile)

		// const formData = new FormData()
		// formData.append('file', selectedFile)
		// formData.append('upload_preset', 'dwwxkbeeo')
		// await handleFile(formData);
		// if (imageUrl != null){

			await signup(name, email, password)
			navigate("/")


		// }
		// else {
		// 	throw new Error("problem with image upload")
			
		// }

	}
	

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
					{/*<input
						style={{ display: 'none' }}
						type='file'
						id='file'
						
					/>
					<label htmlFor='file'>
						<img src={Add} alt='' />
						<span>Add an Avatar</span>
					</label>*/}
					<button disabled={isLoading}>Sign up</button>
					{/*{isLoading && "uploading and compressing the image please wait..."}
					{error && <div>{error}</div>}*/}
				</form>
				<p> you have an account? Login </p>
			</div>
		</div>
	);
};