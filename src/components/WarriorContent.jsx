import React from 'react';

/**
 * Component to render warrior content from structured data
 * @param {Object} content - The content object with role, keyEvent, and paragraphs
 * @param {string} lang - Language code ('en' or 'hi')
 */
const WarriorContent = ({ content, lang }) => {
  // Determine the label for the key event based on language and content
  const getKeyEventLabel = () => {
    if (lang === 'hi') {
      if (content.keyEvent.includes('युद्ध')) return 'प्रमुख युद्ध:';
      if (content.keyEvent.includes('उपलब्धि')) return 'प्रमुख उपलब्धि:';
      if (content.keyEvent.includes('क्षण')) return 'प्रमुख क्षण:';
      if (content.keyEvent.includes('कार्य')) return 'प्रमुख कार्य:';
      if (content.keyEvent.includes('योगदान')) return 'योगदान:';
      return 'प्रमुख घटना:';
    } else {
      if (content.keyEvent.includes('Battle')) return 'Key Battle:';
      if (content.keyEvent.includes('Feat')) return 'Key Feat:';
      if (content.keyEvent.includes('Moment')) return 'Key Moment:';
      if (content.keyEvent.includes('Act')) return 'Key Act:';
      if (content.keyEvent.includes('Contribution')) return 'Contribution:';
      return 'Key Event:';
    }
  };

  const getRoleLabel = () => {
    return lang === 'hi' ? 'भूमिका:' : 'Role:';
  };

  return (
    <>
      <p className="mb-4">
        <strong>{getRoleLabel()}</strong> {content.role}<br />
        <strong>{getKeyEventLabel()}</strong> {content.keyEvent}
      </p>
      {content.paragraphs.map((para, index) => (
        <p key={index} className="mb-4">
          {para}
        </p>
      ))}
    </>
  );
};

export default WarriorContent;
