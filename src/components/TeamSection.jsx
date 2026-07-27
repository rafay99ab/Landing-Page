import React, { useState } from 'react';
import './TeamSection.css';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 'tm-1',
      memberName: 'Jenny Alexander',
      memberRole: 'Digital Marketing Manager',
      memberPhoto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=450&fit=crop&crop=face',
      memberSocials: {
        facebook: '#',
        twitter: '#',
        pinterest: '#',
        instagram: '#'
      },
      isActive: true
    },
    {
      id: 'tm-2',
      memberName: 'Olivia Hughes',
      memberRole: 'SEO Specialist',
      memberPhoto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=450&fit=crop&crop=face',
      memberSocials: {
        facebook: '#',
        twitter: '#',
        pinterest: '#',
        instagram: '#'
      },
      isActive: false
    },
    {
      id: 'tm-3',
      memberName: 'Sophia Lewis',
      memberRole: 'Social Media Manager',
      memberPhoto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=450&fit=crop&crop=face',
      memberSocials: {
        facebook: '#',
        twitter: '#',
        pinterest: '#',
        instagram: '#'
      },
      isActive: false
    }
  ];

  const [selectedIdx, setSelectedIdx] = useState(0);

  const socialIcons = {
    facebook: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
    twitter: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
      </svg>
    ),
    pinterest: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm8.5-6.5a9.5 9.5 0 1 0-3.5 18.3c-.3-1.3-.6-3.3.1-4.7.5-1 2-4.3 2-4.3s-.5-1-.5-2.5c0-2.3 1.3-4 3-4 1.4 0 2.1 1.1 2.1 2.4 0 1.5-.9 3.7-1.4 5.8-.4 1.7.9 3.1 2.5 3.1 3 0 5.3-3.2 5.3-7.7 0-4-2.9-6.8-7-6.8-4.8 0-7.6 3.6-7.6 7.3 0 1.5.6 3.1 1.3 3.9.1.2.2.3.1.5l-.5 1.9c-.1.3-.2.4-.5.2-1.9-.9-3.1-3.6-3.1-5.8 0-4.7 3.4-9.1 9.9-9.1 5.2 0 9.2 3.7 9.2 8.6 0 5.2-3.3 9.3-7.8 9.3-1.5 0-3-.8-3.5-1.7l-1 3.6c-.3 1.3-1.3 2.9-1.9 3.9a9.5 9.5 0 0 0 14.8-7.9z"/>
      </svg>
    ),
    instagram: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    )
  };

  return (
    <section className="team-outer">
      <div className="team-inner">
        {/* Section Header */}
        <div className="team-top">
          <div className="team-emblem">
            <div className="team-emblem-shape">
              <div className="team-emblem-bar"></div>
              <div className="team-emblem-bar"></div>
            </div>
            <span className="team-emblem-txt">Our Team</span>
          </div>
          <h2 className="team-headline">Meet Our Expert Team</h2>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {teamMembers.map((member, idx) => (
            <div
              key={member.id}
              className={`team-membercard ${idx === selectedIdx ? 'team-membercard-active' : ''}`}
              onClick={() => setSelectedIdx(idx)}
            >
              <div className="team-membervisual">
                <img
                  src={member.memberPhoto}
                  alt={member.memberName}
                  className="team-memberphoto"
                />

                {/* Social Icons - only on active card */}
                {idx === selectedIdx && (
                  <div className="team-socialbar">
                    {Object.entries(member.memberSocials).map(([platform, link]) => (
                      <a
                        key={platform}
                        href={link}
                        className="team-socialbtn"
                        aria-label={platform}
                      >
                        {socialIcons[platform]}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="team-memberinfo">
                <h3 className="team-membername">{member.memberName}</h3>
                <span className="team-memberrole">{member.memberRole}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;