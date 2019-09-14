import React from "react";

const Page = ({ title, children }) => {
  React.useEffect(() => {
    document.title = title;
    return () => {};
  }, [title]);
  return children;
};

export default Page;
