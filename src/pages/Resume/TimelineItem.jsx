const TimelineItem = ({ title, date, description, descriptions }) => {
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">{title}</h4>
      <span>{date}</span>
      {descriptions && descriptions.length > 0 ? (
        <ul className="timeline-text" style={{ margin: 0, paddingLeft: 18 }}>
          {descriptions.map((desc, idx) => (
            <li key={idx} style={{ marginBottom: 4 }}>
              {desc}
            </li>
          ))}
        </ul>
      ) : (
        <p className="timeline-text">{description}</p>
      )}
    </li>
  );
};

export default TimelineItem;
