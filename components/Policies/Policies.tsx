import React from "react";

export interface PoliciesSection {
  text?: string;
  subtitle?: string;
  list?: string[];
  textAfterList?: string;
}

interface PoliciesProps {
  policy: PoliciesSection[];
}

const Policies: React.FC<PoliciesProps> = ({ policy }) => {
  const renderTextWithLineBreaks = (text: string) => {
    return text.split(/<\/?br\s*\/?>/i).map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split(/<\/?br\s*\/?>/i).length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div>
      {policy.map((item, index) => (
        <div key={index} style={{ marginBottom: "2rem" }}>
          {item.subtitle && (
            <p className="text-[#460b32] font-[600]">{item.subtitle}</p>
          )}
          {item.text && <p>{renderTextWithLineBreaks(item.text)}</p>}
          {item.list && (
            <ol className="list-decimal ml-[20px]">
              {item.list.map((listItem, index) => (
                <li key={index} className="mb-2 text-[18px]">
                  {listItem}
                </li>
              ))}
            </ol>
          )}
          {item.textAfterList && (
            <p>{renderTextWithLineBreaks(item.textAfterList)}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Policies;
