"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import NavBar from "./components/NavBar/NavBar.jsx";
import Posts from "./components/Posts/Posts";
import UserProfile from "./components/UserProfile/UserProfile.jsx";

export default function Home() {
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const fetchUserDetails = async () => {
    try {
      setLoading(true);
      const response = await fetch("userProfile.json");

      const user = await response.json();

      setUserDetails(user);
      setLoading(false);
    } catch (err) {
      throw new Error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);
  return (
    <main className="main">
      <NavBar></NavBar>
      <UserProfile userDetails={userDetails}></UserProfile>
      {userDetails?.posts && <Posts posts={userDetails?.posts}></Posts>}
    </main>
  );
}
