import React from "react";

interface ContactInfoItemProps {
  icon?: React.ReactNode;
  text: string;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, text }) => {
  return (
    <div className="contactInfoItem">
      {icon}
      <p>{text}</p>
    </div>
  );
};

export default ContactInfoItem;
