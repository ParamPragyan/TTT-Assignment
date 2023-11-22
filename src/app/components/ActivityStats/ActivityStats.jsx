import React from "react";
import styled from "styled-components";
import Like from "../../../../public/like.png";
import Heart from "../../../../public/heart.png";
import Eye from "../../../../public/eye.png";
import fav from "../../../../public/fav.png";
import Image from "next/image";

const ActivityStatsStyle = styled.div`
  font-size: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const ActivityStatsImageContainer = styled.div`
  position: relative;
  width: 1.1rem;
  height: 1.1rem;
  @media (max-width: 280px) {
    width: 1rem;
    height: 1rem;
  }
`;

const ActivityStatsItem = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: .7rem;
  font-weight:600;
  @media (max-width: 280px) {
    font-size: 16px;
  }
`;

const ActivityStatsItemText = styled.span`
  @media (max-width: 280px) {
    font-size: 12px;
  }
`;

function ActivityStats({ userDetails }) {
  return (
    <ActivityStatsStyle>
      <ActivityStatsItem>
        <ActivityStatsImageContainer>
          <Image
            src={fav}
            alt="stars"
            fill={true}
            sizes="(max-width: 1400px) 10vw"
          />
        </ActivityStatsImageContainer>
        {userDetails?.engagement_stats?.stars_count}
      </ActivityStatsItem>
      <ActivityStatsItem>
        <ActivityStatsImageContainer>
          <Image
            src={Like}
            alt="like"
            fill={true}
            sizes="(max-width: 1400px) 10vw"
          />
        </ActivityStatsImageContainer>
        <ActivityStatsItemText>
          {userDetails?.engagement_stats?.likes_count}
        </ActivityStatsItemText>
      </ActivityStatsItem>
      <ActivityStatsItem>
        <ActivityStatsImageContainer>
          <Image
            src={Eye}
            alt="watch"
            fill={true}
            sizes="(max-width: 1400px) 10vw"
          />
        </ActivityStatsImageContainer>
        <ActivityStatsItemText>
          {userDetails?.engagement_stats?.views_count}
        </ActivityStatsItemText>
      </ActivityStatsItem>
      <ActivityStatsItem>
        <ActivityStatsImageContainer>
          <Image
            src={Heart}
            alt="heart"
            fill={true}
            sizes="(max-width: 1400px) 10vw"
          />
        </ActivityStatsImageContainer>
        <ActivityStatsItemText>
          {userDetails?.engagement_stats?.hearts_count}
        </ActivityStatsItemText>
      </ActivityStatsItem>
    </ActivityStatsStyle>
  );
}

export default ActivityStats;