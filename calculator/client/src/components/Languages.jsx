const Languages = ({ language, setLanguage }) => {
  return (
    <select value={language} onChange={e => setLanguage(e.target.value)}>
      <option value="EN">English</option>
      <option value="ES">Spanish</option>
      <option value="DE">German</option>
      <option value="FR">French</option>
    </select>
  );
};

export default Languages;
