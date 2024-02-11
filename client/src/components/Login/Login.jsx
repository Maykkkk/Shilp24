import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import "../../links/css/login.css";
import shilp from "../../links/img/SHILP.png";
import { useMotionValue, useTransform, motion } from "framer-motion";
import GoogleButton from "react-google-button";

import { signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, provider, db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = ({ AllAuth }) => {
	const setAuth = AllAuth.setAuth;
	const setIsProf = AllAuth.setIsProf;
	const navigate = useNavigate();

	const x = useMotionValue(-542);
	const y = useMotionValue(-255);
	const rotateX = useTransform(y, [-338, -138], [20, -20]);
	const rotateY = useTransform(x, [-642, -442], [-20, 20]);

	const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

	const onFormSubmit = async () => {
		try {
			setSubmitButtonDisabled(true);
			signInWithPopup(auth, provider)
				.then((data) => {
					console.log(data);
					localStorage.setItem("displayName", data.user.displayName);
					localStorage.setItem("photoURL", data.user.photoURL);
					localStorage.setItem("UID", data.user.uid);
					localStorage.setItem("email", data.user.email);

					const docRef = doc(
						db,
						"userProfile",
						localStorage.getItem("UID")
					);
					getDoc(docRef).then(async (docSnap) => {
						if (!docSnap.exists()) {
							const sendData = {
								uid: data.user.uid,
								Email: data.user.email,
								Name: data.user.displayName,
							};
							await setDoc(
								doc(
									db,
									"userProfile",
									localStorage.getItem("UID")
								),
								sendData
							);
							setIsProf(false);
							navigate("/profile");
						}
					});
					toast.success(
						<div>
							{"Succesfully Logged In!"} <br />{" "}
							{"Welcome " + localStorage.getItem("displayName")}
						</div>
					);
					setSubmitButtonDisabled(false);
					setAuth(true);
				})
				.catch((error) => {
					console.log(error.message);
				});
		} catch (error) {
			console.error(error.message);
			setSubmitButtonDisabled(false);
		}
	};

	return (
		<>
			<div className="background" style={{ perspective: 2000 }}>
				<motion.div
					style={
						window.innerWidth >= 1400
							? { x, y, rotateX, rotateY, z: 100 }
							: {}
					}
					drag={window.innerWidth >= 1400 ? true : false}
					dragElastic={0.18}
					dragConstraints={{
						top: -285,
						left: -542,
						right: -542,
						bottom: -285,
					}}
					whileTap={{ cursor: "grabbing" }}
					className="loginContainer"
				>
					<div className="content">
						<img src={shilp} alt="" />
						<div className="text-sci">
							<h2>
								Welcome! <br />
								<span>
									To the <span>Shilp</span> Website
								</span>
							</h2>

							<div className="social-icons">
								<a href="https://www.linkedin.com/company/civil-engineering-society-iit-bhu/">
									<FaLinkedin className="linkedIn" />
								</a>
								<a href="https://www.instagram.com/ces_iitbhu/">
									<FaInstagram
										className="instagram"
										style={{ margin: "0 0 0 1vw" }}
									/>
								</a>
								<a href="https://www.facebook.com/groups/157760987681133/">
									<FaSquareFacebook
										className="facebook"
										style={{ margin: "0 0 0 1vw" }}
									/>
								</a>
								<a href="https://www.youtube.com">
									<IoLogoYoutube
										className="youtube"
										style={{ margin: "0 0 0 1vw" }}
									/>
								</a>
							</div>
						</div>
					</div>

					<div className="login">
						<div className="form-box">
							<GoogleButton
								disabled={submitButtonDisabled}
								onClick={() => {
									onFormSubmit();
								}}
								style={{
									background: "#000",
								}}
							/>
						</div>
					</div>
				</motion.div>
			</div>
		</>
	);
};
export default Login;
