import React from "react";
import styled from "styled-components";
import Image from "next/image";
import DiamondIcon from "../../../../public/premium.png";
import ApproveIcon from "../../../../public/check.png";
import UserActivityStats from "../ActivityStats/ActivityStats";

export const MainWrapper = styled.main``;
export const Container = styled.div`
  width: 100%;
  height: 50vh;
  position: relative;
  
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 40%;
  @media (min-width: 600px) {
    height: 60%;

  }
`;



export const InfoContainer = styled.div`
  height: 60%;
  width: fit-content;
  position: absolute;
  z-index: 100;
  top: 33%;
  left: 10vw;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem;

  @media (max-width: 280px) {
    left: 4vw;
    top: 35%;
  }
  @media (min-width: 600px) {
    left: 4vw;
    top: 53%;
    height: 80%;
    padding-left:6.5rem;
    padding-bottom:3rem;
  
  }
`;

export const ProfileImgContainer = styled.div`
  height: 15vh;
  aspect-ratio: 1/1;
  position: relative;
  overflow: hidden;
  border-radius: 100%;
  object-fit: contain;
  border: 1.5px solid #111111;

  @media (max-width: 280px) {
    height: 10vh;
  }
  @media (min-width: 600px) {
    height:20vh;
  }
  
`;

export const ImgNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
`;


export const MembershipIconsContainer = styled.div`
  position: relative;
  width: 12px;
  height: 12px;

  @media (max-width: 280px) {
    width: 12px;
    height: 12px;
  }
  @media (min-width: 500px) {
    gap:0vw;

  }
`;

export const StatsContainer = styled.div`
  display: flex;
  gap: 0.4rem;
`;

export const StatsItem = styled.span`
  border: 2px solid #989898;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.7rem;
  padding: 3px 6px;
  font-weight: 700;
`;

export const UserDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  top: 1rem;
  padding-left: 0.8rem;
  
`;

export const AboutUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const SocialLink = styled.a`
  text-decoration: none;
  font-size: 12px;
  color: #00cfd2;
  cursor: pointer;
`;

export const Bio = styled.p`
  font-size: 0.9rem;

  @media (max-width: 280px) {
    font-size: 0.8rem;
  }
`;

const UserProfile = ({ userDetails }) => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={
            Object.keys(userDetails).length > 0
              ? userDetails?.background_image?.url
              : "/NO_IMAGE.jpg"
          }
          alt="no"
          fill={true}
          style={{
            objectPosition: "center",
            objectFit: "cover",
          }}
          sizes="(max-width: 1400px) 100vw"
          className=""
          priority={true}
        />
      </ImageContainer>
      <InfoContainer>
        <ImgNameWrapper>
          <ProfileImgContainer>
            <Image
              src={
                Object.keys(userDetails).length > 0
                  ? userDetails?.profile_image?.url
                  : "/no_profile_image.png"
              }
              alt={
                Object.keys(userDetails).length > 0
                  ? userDetails?.profile_image?.alt
                  : "No image available"
              }
              fill={true}
              sizes="(max-width: 1400px) 33vw"
            />
          </ProfileImgContainer>

          <UserDetailsContainer>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: ".9rem", fontWeight: "600", paddingRight:"5px" }}>
                {userDetails?.full_name}
              </span>
              <span
                style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}
              >
                <MembershipIconsContainer>
                  <Image src={DiamondIcon} alt="diamond-member" fill={true} />
                </MembershipIconsContainer>
                <MembershipIconsContainer>
                  <Image src={ApproveIcon} alt="approved-member" fill={true} />
                </MembershipIconsContainer>
              </span>
            </div>
            <StatsContainer>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  color: "#989898",
                  gap: "0.1rem",
                }}
              >
                <StatsItem>
                  {userDetails?.follower_following_stats?.followers_count}
                </StatsItem>
                <span style={{ fontSize: "10px", textAlign: "center" }}>Followers</span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  color: "#989898",
                  gap: "0.1rem",
                }}
              >
                <StatsItem>
                  {userDetails?.follower_following_stats?.following_count}
                </StatsItem>
                <span style={{ fontSize: "10px", textAlign: "center" }}>Following</span>
              </div>
            </StatsContainer>
          </UserDetailsContainer>
        </ImgNameWrapper>

        <AboutUserContainer>
          <Bio>{userDetails?.biography}</Bio>
          <SocialLink
            href={userDetails?.social_media_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {userDetails?.social_media_link}
          </SocialLink>
          <UserActivityStats userDetails={userDetails} />
        </AboutUserContainer>
      </InfoContainer>
    </Container>
  );
};

export default UserProfile;
