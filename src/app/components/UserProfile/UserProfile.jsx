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
  height: 50%;
  @media (min-width: 600px) {
    height: 70%;
  }
`;

export const InfoContainer = styled.div`
  height: 60%;
  width: fit-content;
  position: absolute;
  z-index: 100;
  top: 43%;
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
    top: 63%;
    height: 80%;
    padding-left: 6.5rem;
    padding-bottom: 3rem;
  }
`;

export const ProfileImgContainer = styled.div`
  height: 14.5vh;
  aspect-ratio: 1/1;
  position: relative;
  overflow: hidden;
  border-radius: 100%;
  object-fit: contain;
  border: 1.8px solid #616161;

  @media (max-width: 280px) {
    height: 10vh;
  }
  @media (min-width: 600px) {
    height: 20vh;
  }
`;

export const ImgNameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const MembershipIconsContainer = styled.div`
  position: relative;
  width: 13px;
  height: 13px;

  @media (max-width: 280px) {
    width: 12px;
    height: 12px;
  }
  @media (min-width: 500px) {
    gap: 0vw;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  gap: 0.7rem;
`;

export const StatsItem = styled.span`
  border: 2px solid #989898;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align:center;
  width: 4.2rem;
  padding: 4px 2px;
  font-size: 1.1rem;
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

export const UserName = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  padding-right: 5px;
  font-family: "Fira Sans", sans-serif;
`;

export const AboutUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const SocialLink = styled.a`
  text-decoration: none;
  font-size: .8rem;
  color: #00cfd2;
  font-weight:500;
  cursor: pointer;
`;

export const Bio = styled.p`
  font-size: .99rem;
  font-family: "Fira Sans", sans-serif;

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
              <UserName>{userDetails?.full_name}</UserName>
              <span
                style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}
              >
                <MembershipIconsContainer>
                  <Image src={DiamondIcon} st alt="diamond-member" fill={true} />
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
                <span style={{ fontSize: "10px", textAlign: "center" }}>
                  Followers
                </span>
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
                <span style={{ fontSize: "10px", textAlign: "center" }}>
                  Following
                </span>
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
